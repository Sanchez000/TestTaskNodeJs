import express from "express";
import routes from "./routes";
import connect from "./db/connect";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Parses incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.APP_PORT, () => {
    console.log(`Server listing at ${process.env.APP_PORT}`);
    connect();

    routes(app);
});