const Post = require('../models/postModel')
const UpdateHistory = require('../models/updateHistoryModel')
const factory=require('./handlerFactory')

const createHistory=async (req, res, next) => {
   
    const doc = await UpdateHistory.create(req.body);
  }
  exports.prevData=async (req, res, next) => {
    const doc = await Post.findById(req.params.id);
    req.body.beforeContents=doc.contents
  
    next()
  }



exports.createPost=factory.createOne(Post)
exports.getAllPosts = factory.getAll(Post)
exports.getPost = factory.getOne(Post)
exports.updatePost = factory.updateOne(Post,createHistory)
exports.deletePost = factory.deleteOne(Post)
