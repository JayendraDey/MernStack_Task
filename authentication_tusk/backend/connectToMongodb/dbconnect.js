import mongoose from "mongoose";



export const connectToDataBase = async (url)=>{
   try {
    await mongoose.connect(url);
    console.log("✅ Database connected");
  } catch (err) {
    console.error("❌ Database connection error:", err.message);
  }

}