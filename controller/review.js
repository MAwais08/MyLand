const Review = require("../models/review");
const Listing = require("../models/listing");

//Create Review Route
module.exports.create = async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    const review = new Review(req.body);
    listing.reviews.push(review);
    review.author = req.user._id;
    
    await review.save();
    await listing.save();
    req.flash("success", "Successfully created a new review");
    res.redirect(`/listings/${listing._id}`);
}

//Delete Review Route
module.exports.delete = async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Successfully deleted review");
    res.redirect(`/listings/${id}`);
}