const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

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

userSchema.pre('save', async function(next) {
    try {
        // Generate a salt to use with bcrypt
        const salt = await bcrypt.genSalt(10);

        // Hash the password with the salt
        const hashedPassword = await bcrypt.hash(this.password, salt);

        // Replace the plaintext password with the hashed password
        this.password = hashedPassword;

        next();
    } catch (error) {
        next(error);
    }
});


const users_collection=new mongoose.model('user_collection1',userSchema);
module.exports=users_collection;