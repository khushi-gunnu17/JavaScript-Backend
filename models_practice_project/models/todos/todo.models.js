import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    
    content : {
        type : String,
        required : true,
    },

    complete : {
        type : Boolean,
        default : false
    },

    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"    // give the name same as the name given in the model
    },

    subTodos : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "SubTodo"
        }
    ] // Array of subtodos

}, {timestamps : true})


export const Todo = mongoose.model("Todo", todoSchema)