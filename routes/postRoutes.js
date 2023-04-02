const express = require("express");
const postController = require("../controllers/postController");
const authController = require("../controllers/authController");
const router = express.Router();
router.route("/").post(authController.protect,postController.createPost).get(postController.getAllPosts)
router.route('/:id').get(postController.getPost).patch(authController.protect,postController.updatePost).delete(authController.protect,postController.deletePost)
module.exports=router
