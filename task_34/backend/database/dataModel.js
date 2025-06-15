import mongoose, { Types } from "mongoose";


const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email: {
        type : String,
        required : true,
        unique : true
    },
    phoneno : {
        type : String,
        required : true,
    }
})

export const userModel = mongoose.model('userModel' , userSchema)