const express = require("express");
const cloudinaryController = require("../controllers/cloudinaryController");
const authController = require("../controllers/authController");
const router = express.Router();

router
  .route("/")
  .post(
    authController.protect,
    cloudinaryController.uploadImage,
    cloudinaryController.saveCloudinary,
    cloudinaryController.createCloudinary
  )
  .get(cloudinaryController.getAllCloudinary);
router
  .route("/:id")
  .get(cloudinaryController.getCloudinary)
  .patch(authController.protect,   cloudinaryController.updateCloudinary)
  .delete(authController.protect, cloudinaryController.deleteCloudinary);

module.exports = router;
