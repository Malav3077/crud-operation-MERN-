import express from "express"
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from "dotenv"
import cors from "cors"
import route from "./routes/userRoute.js"


const app = express();
app.use(bodyParser.json()) 
app.use(cors())
dotenv.config();


const PORT = process.env.PORT;
const URL = process.env.MONGO_URL;


    try {
        mongoose.connect(URL);
        app.listen(PORT,()=>{
            console.log(`Server Running On ${PORT}`);
        })
        console.log("Database SuccessFully Connected");
    } catch (error) {
        console.log(error); 
    }
    


    app.use("/api/v1/user/",route)
