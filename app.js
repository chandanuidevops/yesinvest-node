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
const updateHistoryRoutes = require("./routes/updateHistoryRoutes");


app.use(cors());

//routes
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/history", updateHistoryRoutes);
app.use("/api/v1/sections", sectionRouter);
app.use("/api/v1/cloudinary", cloudinaryRouter);
app.all("*", (req, res, next) => {
  next(new AppError(`Cann't found ${req.originalUrl} on this server`));
});
app.use(globalErrorHandler);
module.exports = app;
