const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const usersRoutes = require("./routes/usersRoutes");
const authRoutes = require("./routes/authRoutes");
const postsRoutes = require("./routes/postsRoutes");

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRoutes);


mongoose.connect(process.env.CONNECTION_URL).then(() => {
    console.log("DB Connection Successful")
}).catch((err) => {
    console.log(err.message);
});

app.listen(8800, () => {
    console.log("Backed server is running at port 8800.")
})