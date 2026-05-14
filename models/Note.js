const mongoose = require('mongoose');
// create Schema
const NoteSchema = new mongoose.Schema(
    {
        content:{
            type:String,
            required:true,
        },
        IsCompleted :{
            type:Boolean,
            default:false,  
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true,
        }

    },
    {timestamps:true}
)

const Note = mongoose.model('Note',NoteSchema);
    module.exports=Note;