const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    }
})

const users_collection=new mongoose.model('user_collection1',userSchema);
module.exports=users_collection;