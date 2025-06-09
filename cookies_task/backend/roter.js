import express from "express"
import { deleteCookie, getCookie, setCookie, updateCookie } from "./controllers.js"


export const cookiesRouter = express.Router()


cookiesRouter.get('/get', getCookie )
cookiesRouter.post('/set', setCookie)
cookiesRouter.post('/delete',  deleteCookie)
cookiesRouter.post('/update', updateCookie)
