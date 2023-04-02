const express = require("express");
const cloudinaryController = require("../controllers/cloudinaryController");
const router = express.Router();
router
  .route("/")
  .post(
    cloudinaryController.uploadImage,
    cloudinaryController.saveCloudinary,
    cloudinaryController.createCloudinary
  )
  .get(cloudinaryController.getAllCloudinary);
router
  .route("/:id")
  .get(cloudinaryController.getCloudinary)
  .patch(cloudinaryController.updateCloudinary)
  .delete(cloudinaryController.deleteCloudinary);

module.exports = router;
