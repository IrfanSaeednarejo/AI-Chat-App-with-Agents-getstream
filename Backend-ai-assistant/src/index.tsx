import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { apiKey } from "./serverCLient";


const app = express();
app.use(cors({origin:"*"}));
app.use(express.json());
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.json({
        message:"AI_Writing Assistant Server is Running",
        apikey:apiKey
    });
});


