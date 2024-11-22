const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require("./config/db");
const router = require('./routes/userRoutes');


const app = express();


app.use(cors({
    origin: process.env.FRONTEND_URL, 
    credentials: true
}));

// Middlewares
app.use(express.json());
app.use(cookieParser());


// API routes
app.use("/api", router);

// Correct PORT handling
const PORT = process.env.PORT || 8080;


// Connect to DB and start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB");
        console.log("Server is running on port " + PORT);
    });
});
