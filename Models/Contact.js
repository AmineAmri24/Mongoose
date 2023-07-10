const mongoose = require ("mongoose")

const schema = mongoose.Schema

const ContactSchema= new schema ({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required: true,
        unique: true, 
    },

    phone : {
        type : Number,
    },
});

module.exports = mongoose.model("contac", ContactSchema)