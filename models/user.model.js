//schema setup

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id: {
        type : String,
        require: true

    },

    name: {
        type: String,
        require :   [true, "User name is required"]
    },

    age: {
        type: Number,
        require : [true, "age is required"]
    },

    createdOn: {
        type :  Date,
        default : Date.now()
    }
});

module.exports = mongoose.model("User",
userSchema)

// USer is a collection