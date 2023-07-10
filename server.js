// 1
const express = require("express");

//2
const app = express();


//5
require("dotenv").config();


//8 

app.use(express.json());

//6
const connectDB = require ("./config/connectDB.js");
connectDB();


app.use('/api/contact', require('./routes/contact.js'))



//3
const PORT = process.env.PORT;


//4
app.listen (PORT,(err) => {
    err ? console.log (err) : console.log (`this server is running on port ${PORT}`);
});
