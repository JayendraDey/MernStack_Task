import mongoose from 'mongoose';

const DataSchema =  mongoose.Schema({
  category: String,
  value: Number,
});

export const Data = mongoose.model('Data', DataSchema);

