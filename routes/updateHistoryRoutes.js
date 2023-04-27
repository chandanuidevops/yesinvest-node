const express = require("express");
const updateHistoryController = require("../controllers/updateHistoryController");
const router = express.Router();

router
  .route("/")
  .get(updateHistoryController.getAllHistory);

router
  .route("/:id")
  .get(updateHistoryController.getHistory)

module.exports = router;