const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.CONNECTION_URL).then(() => {
    console.log("DB Connection Successful")
}).catch((err) => {
    console.log(err.message);
});

app.listen(8800, () => {
    console.log("Backed server is running at port 8800.")
})