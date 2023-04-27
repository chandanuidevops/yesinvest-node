const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    contents: {
      type: String,
      required: [ true, "A post must have content"],
      minlength: [10, "A post must have greater than 100 characters"],
      trim: true,
    },

    isActive: {
      type: Boolean,
      required: [true, "A post must have an isActive"],
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    section: {
      type: mongoose.Schema.ObjectId,
      ref: "Section",
      required: [true, "Post must belongs to a section"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

postSchema.index({ section: 1 });
// postSchema.pre(/^find/, function (next) {
//   console.log(this.contents)
//   if(this.contents)
//   this.findById({ secretTour: { $ne: true } });
//   next();
// });

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
