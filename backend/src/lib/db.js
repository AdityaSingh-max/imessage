import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

export const connectDb = async() => {
    try{
       const mongoUri = process.env.MONGO_URI;

       if(!mongoUri){
        throw new Error ("MONGO_URI is required");
       }
       const conn = await mongoose.connect(mongoUri);
       console.log("MongoDB connected", conn.connection.host);
    } catch(error){
        console.error("MongoDB connection error:", error.message);
        process.exit(1); // 1 means failed, 0 means success
    }
}