const express = require("express");
const sectionController = require("../controllers/sectionController");
const router = express.Router();

router
  .route("/")
  .post(sectionController.createSection)
  .get(sectionController.getAllSection);
router.route("/update-many").patch(sectionController.updateManySection,sectionController.getAllSection);
router
  .route("/:id")
  .get(sectionController.getSection)
  .patch(sectionController.updateSection)
  .delete(sectionController.deleteSection);

module.exports = router;
