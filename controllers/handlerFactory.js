const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });
exports.getAll = (Model,populateOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.find().select('-__v')
    if(populateOptions)  query = query.populate(populateOptions)
    const features = new APIFeatures(query, req.query)
      .sort()
      .paginate();
     
    const doc = await features.query;
  
    res.status(200).json({
      status: "success",
      data: {
        data: doc,
        count: doc.length,
      },
    });
  });
exports.getOne = (Model,populateOptions) =>
  catchAsync(async (req, res, next) => {
    
   let query= Model.findById(req.params.id).select('-__v')
    if(populateOptions)  query = query.populate(populateOptions)
    
    let doc = await query;
    if (!doc) {
      return next(new AppError("No documents found with this id", 400));
    }
    res.status(200).json({
      status: "success",
      data: { data: doc },
    });
  });
exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      return next(new AppError("No documents found with this id", 400));
    }
  
    res.status(200).json({
      status: "success",
      data: { data: doc },
    });
  });
exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Deleted successfully",
    });
  });
