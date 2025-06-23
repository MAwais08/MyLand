const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const ExpressError = require('../utild/ExpressError');
const wrapAsync = require('../utild/wrapAsync');
const { listingSchema } = require('../utild/schemas');
const { isLoggedIn , isOwner , validateListing } = require("../middleware");
const controllerListing = require("../controller/listing");
const multer = require("multer");
const { storage } = require("../cloudConfig");
const upload = multer({ storage });







//index , create route
router.route("/")
    .get(wrapAsync(controllerListing.index))
   .post(validateListing, isLoggedIn,upload.single("image"), wrapAsync(controllerListing.create));
   

//new route
router.route("/new")
    .get(isLoggedIn, wrapAsync(controllerListing.new));


//show , update , delete route
router.route("/:id")
    .get(wrapAsync(controllerListing.show))
    .put(validateListing, isLoggedIn, isOwner, upload.single("image"), wrapAsync(controllerListing.update))
    .delete(isLoggedIn, isOwner, wrapAsync(controllerListing.delete));

//edit route
router.route("/:id/edit")
    .get(isLoggedIn, isOwner, wrapAsync(controllerListing.edit));





module.exports = router;
