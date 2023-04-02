const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
app.use(bodyParser.json());
const cors = require("cors");

//routers
const sectionRouter = require("./routes/sectionRoutes");
const postRouter = require("./routes/postRoutes");
const cloudinaryRouter = require("./routes/cloudinaryRoutes");

// app.options('/', cors()) 
app.use(cors());
// app.use(cors({ origin: "*"}));

// var corsOptions = {
//   origin: ['http://localhost:3001','https://bd7e-103-174-71-86.in.ngrok.io'],
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// app.get('/api/v1/posts', cors(corsOptions), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for only example.com.'})
// })



// app.use(function(req, res, next) {
//   console.log(req.headers)  
//   res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match 
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
//   });

//   app.get('/', function (req, res) {
//     console.log(req)
//     res.header("Access-Control-Allow-Origin", "*,http://localhost:3001",); // update to match 
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.status(200).json('hello world')
// })
//routes
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/sections", sectionRouter);
app.use("/api/v1/cloudinary", cloudinaryRouter);
app.all("*", (req, res, next) => {
  next(new AppError(`Cann't found ${req.originalUrl} on this server`));
});
app.use(globalErrorHandler);
module.exports = app;
