import express from "express";
import cors from "cors";
import "dotenv/config";
import User from "./src/models/user.model.js";
import { connectDb } from "./src/lib/db.js";
import { clerkMiddleware } from '@clerk/express';

const app = express();

const FROUNTEND_URL = process.env.FROUNTEND_URL;
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({origin:FROUNTEND_URL, credentials:true}));
app.use(clerkMiddleware());

app.get("/health", (req,res)=> {
    res.status(200).json({ok:true});
});

app.listen(port, () => {
    connectDb();
    console.log(`Server running on port ${port}`)
});



