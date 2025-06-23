const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing");
const Review = require("../models/review");
const ExpressError = require('../utild/ExpressError');
const wrapAsync = require('../utild/wrapAsync');
const { reviewSchema } = require('../utild/schemas');
const { isLoggedIn , isReviewAuthor , validateReview } = require("../middleware");
const controllerReview = require("../controller/review");





//Review Post Route
router.post("/", validateReview,isLoggedIn, wrapAsync(controllerReview.create));

//Delete Review Route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(controllerReview.delete));

module.exports = router;