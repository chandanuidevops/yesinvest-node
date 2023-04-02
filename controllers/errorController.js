const AppError = require("../utils/appError")

const handleValidationErrorDB = err=>{
   const errors = Object.values(err.errors).map(ele=>ele.message)
   const message = `Invalid input field data: ${errors.join('. ')}`
   return new AppError(message,400)
}
const handleDuplicateFieldDB = err=>{
    const value = err.message.match(/(["'])(\\?.)*?\1/)[0];
    const message=`Duplicate field data ${value}`
    return new AppError(message,400)
}
const handleCastErrorDB=err=>{
    return new AppError(err,400)
}
const sendErrorProd=(err,req,res)=>{
    res.status(err.statusCode).json({
        status:err.status,
        message:err.message,
        data:{
            data:null
        }
    })
}


module.exports=(err,req,res,next)=>{
    err.statusCode = err.statusCode||500
    err.status=err.status||'error'
    let error=Object.assign(err)
    if(error.name==='ValidationError'){
      error= handleValidationErrorDB(error)
    }
    if(error.name==='MongoError'){
        error=handleDuplicateFieldDB(error)
    }
    console.log(error)
    if(error.name==='CastError'){
        error=handleCastErrorDB(error)
    }
    sendErrorProd(error,req,res)
}