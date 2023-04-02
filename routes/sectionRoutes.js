const express = require("express");
const sectionController = require("../controllers/sectionController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .post(sectionController.createSection)
  .get(  authController.protect, sectionController.getAllSection);
router.route("/update-many").patch(sectionController.updateManySection,sectionController.getAllSection);
router
  .route("/:id")
  .get(sectionController.getSection)
  .patch( authController.protect,   sectionController.updateSection)
  .delete(authController.protect, sectionController.deleteSection);

module.exports = router;
