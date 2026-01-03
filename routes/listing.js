// const express=require("express");
// const router=express.Router();
// const Listing=require("../models/listing.js");

// const wrapAsync=require("../utils/wrapAsync.js");

// const {isLoggedIn, isOwner,validateListing}=require("../middleware.js");
// const listingController=require("../controllers/listings.js");

// const multer=require("multer");
// const {storage}=require("../cloudConfig.js");
// const upload=multer({ storage });

// router
//     .route("/")
//     .get(wrapAsync(listingController.index))
//     .post(
//         isLoggedIn,
//         validateListing,
//         upload.single('listing[image]'),
//         wrapAsync(listingController.createListing)
//     );

// //create new listing route
// router.get("/new", isLoggedIn,listingController.renderNewForm);

// router
//     .route("/:id")
//     .get(wrapAsync(listingController.showListing))
//     .put(
//         isLoggedIn,
//         isOwner,
//         upload.single('listing[image]'), 
//         validateListing,
//         wrapAsync(listingController.updateListing)
//     )    
//     .delete(
//         isLoggedIn,
//         isOwner,
//         wrapAsync(listingController.destroyListing)
//     );

// //edit route to edit a listing
// router.get("/:id/edit", 
//     isLoggedIn,
//     isOwner,
//     wrapAsync(listingController.renderEditForm)
// );



// module.exports=router;
const express = require("express");
const router = express.Router();

const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");

const {
  isLoggedIn,
  isOwner,
  validateListing,
} = require("../middleware.server.js");

const listingController = require("../controllers/listings.js");

//  NEW: import upload from cloudConfig
const { upload } = require("../cloudConfig.js");


//    ROUTES


// INDEX + CREATE
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"), // ✅ multer memory upload
    validateListing,
    wrapAsync(listingController.createListing)
  );

// NEW LISTING FORM
router.get("/new", isLoggedIn, listingController.renderNewForm);

// SHOW / UPDATE / DELETE
router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"), // ✅ multer memory upload
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing)
  );

// EDIT FORM
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
