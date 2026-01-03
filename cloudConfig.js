// const cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUD_API_KEY,
//     api_secret: process.env.CLOUD_API_SECRET
// });

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'Wanderlust_DEV',
//     allowedFormats: ["png","jpg","jpeg"],
//   },
// });

// module.exports={
//     cloudinary,
//     storage,
// };

const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");
const streamifier = require("streamifier");

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Multer memory storage
const upload = multer({ storage: multer.memoryStorage() });

/**
 * Upload file buffer to Cloudinary
 * @param {Buffer} buffer - file buffer from multer
 * @param {string} folder - Cloudinary folder
 * @returns {Promise} - resolves with Cloudinary response
 */
function uploadToCloudinary(buffer, folder = "Wanderlust_DEV") {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
}

module.exports = {
  cloudinary,
  upload,
  uploadToCloudinary,
};
