// const Listing=require("../models/listing");
// const fetch = (...args) =>
//   import("node-fetch").then(({ default: fetch }) => fetch(...args));


// module.exports.index=async(req,res)=>{
//     const alllistings=await Listing.find({});
//     res.render("listings/index.ejs",{alllistings});
// };

// module.exports.renderNewForm=(req,res)=>{
//     res.render("listings/new.ejs");
// };

// module.exports.showListing= async(req,res)=>{
//     const {id}=req.params;
//     const listing=await Listing.findById(id).populate({path: "reviews",populate: {
//         path: "author",
//     },
// })
// .populate("owner");

//     if(!listing){
//         req.flash("error", "Listing you requested for does not exist");
//         return res.redirect("/listings");
//     }
//     console.log(listing);
//     res.render("listings/show.ejs",{listing,
//     lat: listing.geometry.coordinates[1],
//     lng: listing.geometry.coordinates[0]
// });
// };

// module.exports.createListing = async (req, res, next) => {
//     let url = req.file.path;
//     let filename = req.file.filename;

//     const location = req.body.listing.Location;

//     const response = await fetch(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`
//     );
//     const data = await response.json();

//     if (data.length === 0) {
//         req.flash("error", "Invalid location");
//         return res.redirect("/listings/new");
//     }

//     const lat = parseFloat(data[0].lat);
//     const lng = parseFloat(data[0].lon);

//     const newListing = new Listing(req.body.listing);

    
//     newListing.geometry = {
//         type: "Point",
//         coordinates: [lng, lat], // [longitude, latitude]
//     };

//     newListing.owner = req.user._id;
//     newListing.image = { url, filename };

//     let saveListing=await newListing.save();
//     console.log(saveListing);

//     req.flash("success", "Successfully created a new listing!");
//     res.redirect("/listings");
// };


// module.exports.renderEditForm=async (req,res)=>{
//     const {id}=req.params;
//     const listing=await Listing.findById(id);
//     if(!listing){
//         req.flash("error", "Listing you requested for does not exist");
//         return res.redirect("/listings");
//     }

//     let originalImageUrl=listing.image.url;
//     originalImageUrl=originalImageUrl.replace("/upload","/upload/w_250");
//     res.render("listings/edit.ejs",{listing,originalImageUrl});
// };

// module.exports.updateListing = async (req, res) => {
//   const { id } = req.params;
//   const listing = await Listing.findById(id);
//   if (!listing) {
//     req.flash("error", "Listing not found!");
//     return res.redirect("/listings");
//   }

//   // Update basic fields
//   listing.title = req.body.listing.title;
//   listing.price = req.body.listing.price;
//   listing.description = req.body.listing.description;

//   // Update location if changed
//   if (req.body.listing.Location && req.body.listing.Location !== listing.Location) {
//     const response = await fetch(
//       `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(req.body.listing.Location)}`
//     );
//     const data = await response.json();

//     if (data.length > 0) {
//       listing.geometry = {
//         type: "Point",
//         coordinates: [
//           parseFloat(data[0].lon),
//           parseFloat(data[0].lat),
//         ],
//       };
//       listing.Location = req.body.listing.Location; // Update the stored location name
//     }
//   }

//   // Update image if new file uploaded
//   if (req.file) {
//     listing.image = {
//       url: req.file.path,
//       filename: req.file.filename,
//     };
//   }

//   await listing.save();

//   req.flash("success", "Successfully updated the listing!");
//   res.redirect(`/listings/${id}`);
// };


// module.exports.destroyListing=async (req,res)=>{
//     let {id}=req.params;
//     let deletedListing=await Listing.findByIdAndDelete(id);
//     console.log(deletedListing);
//     req.flash("success", "Successfully deleted the listing!");
//     res.redirect("/listings");
// };

const Listing = require("../models/listing");
const { uploadToCloudinary } = require("../cloudConfig");
const {geocodeLocation}=require("../utils/geocode");
/* =========================
   INDEX
========================= */
module.exports.index = async (req, res) => {
  const alllistings = await Listing.find({});
  res.render("listings/index.ejs", { alllistings });
};

/* =========================
   NEW FORM
========================= */
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

/* =========================
   SHOW
========================= */
module.exports.showListing = async (req, res) => {
  const { id } = req.params;

  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: { path: "author" },
    })
    .populate("owner");

  if (!listing) {
    req.flash("error", "Listing you requested does not exist");
    return res.redirect("/listings");
  }

  res.render("listings/show.ejs", {
    listing,
    lat: listing.geometry.coordinates[1],
    lng: listing.geometry.coordinates[0],
  });
};

/* =========================
   CREATE
========================= */
module.exports.createListing = async (req, res, next) => {
  try {
    // 1️⃣ Upload image to Cloudinary
    let cloudinaryResult = null;
    if (req.file) {
      cloudinaryResult = await uploadToCloudinary(req.file.buffer);
    }

    // 2️⃣ Geocode location (BACKEND SAFE)
    const location = req.body.listing.Location;
    const coords = await geocodeLocation(location);

    if (!coords) {
      req.flash("error", "Invalid location");
      return res.redirect("/listings/new");
    }

    // 3️⃣ Create listing
    const newListing = new Listing(req.body.listing);

    newListing.geometry = {
      type: "Point",
      coordinates: [coords.lng, coords.lat],
    };

    newListing.owner = req.user._id;

    // 4️⃣ Save Cloudinary image
    if (cloudinaryResult) {
      newListing.image = {
        url: cloudinaryResult.secure_url,
        filename: cloudinaryResult.public_id,
      };
    }

    await newListing.save();

    req.flash("success", "Successfully created a new listing!");
    res.redirect("/listings");
  } catch (err) {
    next(err);
  }
};

/* =========================
   EDIT FORM
========================= */
module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing you requested does not exist");
    return res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");

  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

/* =========================
   UPDATE
========================= */
module.exports.updateListing = async (req, res, next) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
      req.flash("error", "Listing not found!");
      return res.redirect("/listings");
    }

    listing.title = req.body.listing.title;
    listing.price = req.body.listing.price;
    listing.description = req.body.listing.description;

    if (
      req.body.listing.Location &&
      req.body.listing.Location !== listing.Location
    ) {
      const coords = await geocodeLocation(req.body.listing.Location);

      if (coords) {
        listing.geometry = {
          type: "Point",
          coordinates: [coords.lng, coords.lat],
        };
        listing.Location = req.body.listing.Location;
      }
    }

    if (req.file) {
      const cloudinaryResult = await uploadToCloudinary(req.file.buffer);
      listing.image = {
        url: cloudinaryResult.secure_url,
        filename: cloudinaryResult.public_id,
      };
    }

    await listing.save();

    req.flash("success", "Successfully updated the listing!");
    res.redirect(`/listings/${id}`);
  } catch (err) {
    next(err);
  }
};

/* =========================
   DELETE
========================= */
module.exports.destroyListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);

  req.flash("success", "Successfully deleted the listing!");
  res.redirect("/listings");
};
