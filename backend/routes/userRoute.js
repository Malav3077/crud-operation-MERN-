// import userModel from "../models/userModel";
import express from "express"
import { Create, Delete, getAll, getOne, update } from "../controller/userController.js"

const route =  express.Router()

route.post("/create",Create)
route.get("/getall",getAll)
route.get("/getone/:id",getOne)
route.put("/update/:id",update)
route.delete("/delete/:id",Delete)

export default route