import express from "express";
import routes from "./routes";
import connect from "./db/connect";
import dotenv from 'dotenv';
dotenv.config();


// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
// // in latest body-parser use like below.
// app.use(bodyParser.urlencoded({ extended: true }));


const app = express();

// Parses incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded());
// app.use(express.urlencoded({ extended: true }));

app.listen(process.env.APP_PORT, () => {
    console.log(`Server listing at ${process.env.APP_PORT}`);
    connect();

    routes(app);
});