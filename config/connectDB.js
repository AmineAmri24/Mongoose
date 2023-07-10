//1
const mongoose = require ("mongoose");

//2
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.BD_URI);
        console.log("database connected!")
    } catch(error){
        console.log("cannot connect", error);
    }
};

module.exports = connectDB;