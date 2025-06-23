const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name: process.env.cloudName,
    api_key: process.env.cloudApiKey,
    api_secret: process.env.cloudApiSecret
});


const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "myLandDev",
        allowedFormats: ["jpeg", "png", "jpg"]
    }
});

module.exports = {
    cloudinary,
    storage
}