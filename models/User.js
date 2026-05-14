//call Mongoose
// create Schema
//Create Model
// exports Models

const mongoose = require('mongoose');
// create Schema
const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true,

        },
        email:{
            type:String,
            required:true,
                unique:true,
                lowercase:true,
                trim:true,
        },
        password:{
            type:String,
            required:true,
        },

    }
    ,{
        timestamps:true
    }
);

const User = mongoose.model ('User',userSchema);

module.exports = User;