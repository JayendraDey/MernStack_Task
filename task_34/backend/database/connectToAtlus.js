import mongoose from "mongoose";

export const connectToDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    
  }
};
