import cors from "cors";
import "dotenv/config";
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


const port=process.env.PORT || 8000;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
