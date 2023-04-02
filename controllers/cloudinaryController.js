const cloudinary = require('../utils/cloudinary');
const uploader = require('../utils/multer');
const catchAsync = require('../utils/catchAsync');
const Cloudinary = require('../models/cloudinaryModel')
const factory=require('./handlerFactory')

exports.uploadImage = uploader.single('upload');
exports.saveCloudinary = catchAsync(async (req, res, next) => {
  const result = await cloudinary.uploader.upload(req.file.path);
  req.body.upload=result.secure_url
  next()
});

exports.createCloudinary = catchAsync(async (req, res, next) => {
  const doc = await Cloudinary.create(req.body);
  res.status(200).json({
    status: "success",
    uploaded: true,
    url: req.body.upload,
    data: {
      data:doc
    },
  });
});

exports.getAllCloudinary = factory.getAll(Cloudinary)
exports.getCloudinary = factory.getOne(Cloudinary)
exports.updateCloudinary = factory.updateOne(Cloudinary)
exports.deleteCloudinary = factory.deleteOne(Cloudinary)