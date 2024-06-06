// Architectural pattern - MVC, Dependency Injection, MVP
// Butun proyektni suyagi

// Desing pattern - Middleware, decorator
// Prooyektning bir bo'lagining suyagi: masalan qo'ligi


// MONGO DB:
// CLUSTER => DATABASE => COLLECTION => DOCUMENT

import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";

dotenv.config();

mongoose.connect(process.env.MONGO_URL as string, {}).then((data) => {
    console.log("MongoDb connection is succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function(){
        console.log(`The server is running successfully on ${PORT}`);
    });
}).catch((err) => console.log("Error on connecting to MongoDB", err));