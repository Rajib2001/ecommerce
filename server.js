import express from "express";
import dotenv from "dotenv"
import colors from "colors"
import morgan from "morgan"
import authRoutes from "./routes/authRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import connectDB from "./config/db.js";
import cors from "cors"
import path from "path"

import { fileURLToPath } from "url";

 const __filename=fileURLToPath(import.meta.url)
 const __dirname=path.dirname(__filename)



const app=express();
// app.use(expres.path.join(__dirname("")))


dotenv.config()
app.get("/",(req,res)=>{
    res.send("<h1> Welcome to MERN STACK Ecommerce app </h1>")

})

connectDB();
 


// middleware 
app.use(cors());
// app.use(express.json())
app.use(morgan("dev"))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'./client/build')))


// ROUTING
app.use("/api/v1/auth",authRoutes) 
app.use("/api/v1/category",categoryRoutes) 
app.use("/api/v1/product",productRoutes) 


// rest api

app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))

})

const PORT=process.env.PORT || 8080;

app.listen(PORT,(req,res)=>{
    console.log(`Your server is running on port ${PORT}`.bgCyan.white)
})