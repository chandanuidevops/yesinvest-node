const mongoose = require("mongoose");
const cloudinarySchema = new mongoose.Schema({
  upload: {
    type: String,
   required: [true, "Image file is required"],
  },
  section: {
    type: String,
    default: null,
  },
  alt: {
    type: String,
    default: null,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Cloudinary = mongoose.model("Cloudinary", cloudinarySchema);
module.exports = Cloudinary;
