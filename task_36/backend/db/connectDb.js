import mongoose from "mongoose";



export const connectToDb = async(url)=> {
    try {
        await mongoose.connect(url)
        console.log("mongodb connected")
        
    } catch (error) {

        console.log("error form connect db")
        
    }


}