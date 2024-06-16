import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    }
}, {timestamps : true})

// the exported name ought to be similar with the name in the model
export const Category = mongoose.model("Category", categorySchema)