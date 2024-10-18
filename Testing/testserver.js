
const express = require('express');
const dotenv = require('dotenv');
const mongo = require('mongoose');

const PORT = 8080

// load environment vars
dotenv.config();

const userRoutes = require('./routes/userRoutes')

// app routes
const app = express();

app.get('/', (req, res) => {
    res.send("route runs\n");
});

app.listen(PORT, () => {
    console.log("server running on port ${PORT}\n");
});

