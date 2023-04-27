const mongoose = require("mongoose");

const updateHistorySchema=new mongoose.Schema({
    type: {
        type: String,
      },
      contents: {
        type: String,
        required: [ true, "A post must have content"],
        trim: true,
        default:null
      },
      beforeContents: {
        type: String,
       
        trim: true,
      },
      updatedAt: {
        type: Date,
        default: function(){return Date.now()}
      },
      updatedBy: {
        type: String,
      },
      section: {
        type: mongoose.Schema.ObjectId,
        ref: "Section",
        required: [true, "Post must belongs to a section"],
      },
},{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
}


)

// updateHistorySchema.virtual('sections', {
//   ref: 'Section',
//   foreignField: '_id',
//   localField: 'section',
// });
const UpdateHistory = mongoose.model("UpdateHistory", updateHistorySchema);
module.exports = UpdateHistory;