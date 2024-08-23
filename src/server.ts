
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";


mongoose.connect(process.env.MONGO_URL as string, {}).then((data) => {
    console.log("MongoDb connection is succeed");
    const PORT = process.env.PORT ?? 3005;
    app.listen(PORT, function () {
        console.info(`The server is running successfully on ${PORT}`);
        console.info(`Admin project on http://localhost:${PORT}/admin \n`)
    });
}).catch((err) => console.log("Error on connecting to MongoDB", err));