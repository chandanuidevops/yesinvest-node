const Section = require("../models/sectionModel");
const factory = require("./handlerFactory");
exports.createSection = factory.createOne(Section);
exports.getAllSection = factory.getAll(Section, "posts");
exports.getSection = factory.getOne(Section, "posts");
exports.updateSection = factory.updateOne(Section);
exports.deleteSection = factory.deleteOne(Section);
exports.updateManySection = async (req, res, next) => {
 
    const arr=req.body
        await Promise.all(arr.map(async(doc)=>{
            await Section.findByIdAndUpdate(doc.id, {order:doc.order}, {
                new: true,
                runValidators: true,
              });
        }));
next()
//   res.status(200).json({
//     status: "success",
//     message: "Updated successfully",
//   });
};
