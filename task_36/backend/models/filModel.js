import mongoose from "mongoose";

const fileSchema =  mongoose.Schema({
 filename: String,
  path: String,
  uploadedAt: { type: Date, default: Date.now },
});

 const File =  mongoose.model("File", fileSchema);

export default File





