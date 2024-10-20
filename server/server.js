import "dotenv/config"
import express from "express"
import cors from "cors"
import connectDB from "./configs/mongodb.js"


// App Config 

const PORT = process.env.PORT || 4000
const app = express()
const corsConfig = {
    origin: "*",
    credential: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
};
await connectDB()

// Initialize Middleware 

app.use(express.json())
app.options("", cors(corsConfig));
app.use(cors(corsConfig))

// API routes 

app.get("/",(req,res)=> res.send("API Working"))

app.listen(PORT, ()=> console.log("Server Running on port" +PORT ))