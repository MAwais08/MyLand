const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utild/ExpressError");
const { listingSchema, reviewSchema } = require("./utild/schemas");

//Middleware to check if user is logged in
module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl;
        req.flash("error", "You must be logged in to do that");
        return res.redirect("/login");
    }
    next();
}

//Middleware to store return to url
module.exports.storeReturnTo = (req, res, next) => {
    if(req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}

//Middleware to check if user is owner of listing
module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing.owner.equals(req.user._id)) {
        req.flash("error", "You are not authorized to do that");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

//Middleware to check if user is author of review
module.exports.isReviewAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if (!review.author.equals(req.user._id)) {
        req.flash("error", "You are not authorized to do that");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

//Middleware to validate listing
module.exports.validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        throw new ExpressError(error.details.map(el => el.message).join(','), 400);
    }
    next();
}     

//Middleware to validate review
module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        throw new ExpressError(error.details.map(el => el.message).join(','), 400);
    }
    next();
}
