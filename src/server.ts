// Architectural pattern - MVC, Dependency Injection, MVP
// Butun proyektni suyagi

// Desing pattern - Middleware, decorator
// Proyektning bir bo'lagining suyagi: masalan qo'ligi


// MONGO DB:
// CLUSTER => DATABASE => COLLECTION => DOCUMENT

import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";


mongoose.connect(process.env.MONGO_URL as string, {}).then((data) => {
    console.log("MongoDb connection is succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
        console.info(`The server is running successfully on ${PORT}`);
        console.info(`Admin project on http://localhost:${PORT}/admin \n`)
    });
}).catch((err) => console.log("Error on connecting to MongoDB", err));