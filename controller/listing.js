const Listing = require("../models/listing");

//Index Route
module.exports.index = async(req, res) => {
    const { q } = req.query;
    let listings;
    if (q && q.trim() !== "") {
        const regex = new RegExp(q, 'i');
        listings = await Listing.find({
            $or: [
                { title: regex },
                { location: regex },
                { country: regex }
            ]
        });
    } else {
        listings = await Listing.find({});
    }
    res.render("listings/index.ejs", { listings, q });
}

//New Route
module.exports.new = async(req, res) => {
    res.render("listings/new.ejs");
}

//Show Route
module.exports.show = async(req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
      .populate({
        path: "reviews",
        populate: { path: "author" },       
      })
      .populate("owner");
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
}

//Create Route
module.exports.create = async (req, res) => {
    const url = req.file.path;
    const filename = req.file.filename;
    const listing = new Listing({...req.body, owner: req.user._id});
    listing.image = { url, filename };
    await listing.save();
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    req.flash("success", "Successfully created a new listing");
    res.redirect(`/listings/${listing._id}`);
}

//Edit Route
module.exports.edit = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
}

//Update Route
module.exports.update = async (req, res) => {
    const { id } = req.params;
    
    // Get the existing listing to preserve the image if no new one is uploaded
    const existingListing = await Listing.findById(id);
    if (!existingListing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    
    // Prepare update data
    const updateData = { ...req.body };
    
    // Handle image upload
    if (req.file) {
        // New image uploaded
        const url = req.file.path;
        const filename = req.file.filename;
        updateData.image = { url, filename };
    } else {
        // No new image, keep the existing one
        updateData.image = existingListing.image;
    }
    
    const listing = await Listing.findByIdAndUpdate(id, updateData);
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    req.flash("success", "Successfully updated listing");
    res.redirect(`/listings/${id}`);
}

//Delete Route
module.exports.delete = async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    if (!deletedListing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    req.flash("success", "Successfully deleted listing");
    res.redirect("/listings");
}