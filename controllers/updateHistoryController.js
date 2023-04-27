const UpdateHistory = require('../models/updateHistoryModel')
const factory=require('./handlerFactory')
const catchAsync = require("../utils/catchAsync");
exports.getAllHistory = factory.getAll(UpdateHistory,'section')

exports.getHistory = factory.getOne(UpdateHistory,'sections')