import express from "express"
import { checkIsLoggedIn } from "../middleware/auth.js";

export const ProductRouter  = express.Router();

ProductRouter.get('/' , checkIsLoggedIn, (req , res)=>{
    res.status(200).json([
        {
            name : "tv",
            price : 80000

        },
        {
            name : "mobile",
            price : 30000

        }
    ])
})




