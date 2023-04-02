const mongoose = require("mongoose");
const slugify = require("slugify");
const sectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Section title is required"],
      maxlength: [40, " A post must have  less than 40 char"],
      minlength: [5, " A post must have  greater than 5 char"],
    },
    order: {
      type: Number,
      required: [true, "Section order is required"],
      default: true,
    },
    slug: {
      type: String,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
sectionSchema.virtual('posts', {
  ref: 'Post',
  foreignField: 'section',
  localField: '_id',
});

sectionSchema.method('toClient', function() {
  const obj = this.toObject();
 
  obj.id = obj._id;
  delete obj._id;

  return obj;
});


sectionSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});
const Section = mongoose.model("Section", sectionSchema);
module.exports = Section;
