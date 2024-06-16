import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({

    username : {
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },

    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },

    password : {
        type : String,
        required : [true, "password is required."]
    },

    isActive : Boolean
}, 
{
    timestamps : true
})

// takes two parameters , what model has to be made and on what basis it has to be made
export const User = mongoose.model("User", userSchema)
