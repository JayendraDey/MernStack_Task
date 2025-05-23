import mongoose, { Types } from "mongoose"

 const todoSchema =  new mongoose.Schema({
    text : {
        type : String,
        require : true ,
        min : 6
    },
  
})

export const Todos = mongoose.model("Todos" , todoSchema)

