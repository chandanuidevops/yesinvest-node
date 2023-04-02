const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.protect = catchAsync(async(req,res,next)=>{
    const token = req.headers.token
    if(token!==process.env.PROTECTED_TOKEN){
        return next(
            new AppError("Unauthorised request", 401)
          );
    }
    next()
})