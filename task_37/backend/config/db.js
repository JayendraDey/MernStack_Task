import mongoose from "mongoose";



export const  connectTodb = async (url)=>{

    try {
        mongoose.connect(url)

        console.log("mongodb connected")
        
    } catch (error) {

        console.log("error form mongodb")
        
    }

}