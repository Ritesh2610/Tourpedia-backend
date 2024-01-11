import express  from "express";
import morgan from "morgan";
import cors from "cors"
import mongoose from "mongoose";
import userRouter from "./routes/user.js"
import tourRouter from "./routes/tour.js"
import dotenv from "dotenv"
dotenv.config()
const port=5000
// const port = process.env.PORT || 5000;

const app=express();

app.use(morgan("dev"));
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());


// api 
// login route 
app.use("/users",userRouter)
// tour route
app.use("/tour",tourRouter)
app.use("/",(req,res)=>res.json("Welcome to tour app"))

mongoose.connect("mongodb+srv://riteshpandey7356:emHwFjE7b9SPwzTX@cluster0.a2ke5tx.mongodb.net/tour_app?retryWrites=true&w=majority/tour")
.then(()=>{
    app.listen(port,()=>console.log(`Server Running on ${port}`))
})
.catch((error)=>console.log(`${error} did not connect`))

// mongodb
//  id = riteshpandey7356
//  passsword= Rpandey@914



// url
// mongodb+srv://riteshpandey7356:<password>@cluster0.a2ke5tx.mongodb.net/?retryWrites=true&w=majority
