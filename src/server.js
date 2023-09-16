const express=require('express')
const bodyparser=require('body-parser')
const path=require('path')
const port=8000
const users_collection=require('./userdb/user')
require("./userdb/connection")

const app=express()

app.use(bodyparser.urlencoded(
    {
        extended:true
    }
))


app.use(express.json())

app.get('/' ,(req,res)=>{
     res.send('This is the home Page')
})

let mainfolder=path.join(__dirname,'../')
app.get('/register',(req,res)=>{
    res.sendFile(mainfolder+"/index.html");
})

app.post("/register",(req,res)=>{
    // console.log(`req.body.fullname `);

let req_data=new users_collection(req.body);
// console.log(req_data);
req_data.save();
res.send('Registered Successfully!!!')

})
app.listen(port,()=>{
    console.log(`Listening on port no ${port} `)
})