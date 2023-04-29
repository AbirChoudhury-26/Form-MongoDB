const mongoose=require('mongoose')
const users_collection=require('./user')

mongoose.connect('mongodb+srv://abir_26:abir@cluster0.mn9ykf9.mongodb.net/myuserdata')
.then(()=>{
    console.log("Connection is Successful!!!")
})
.catch((err)=>{
    console.log(err)
})