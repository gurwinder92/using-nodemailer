const express=require('express')
const bodyParser=require('body-parser')
const nodemailer=require('nodemailer')
const user=require('../nodemailer/user')
const route=require('../nodemailer/route')
const app= new express()
const port =2024
app.use(bodyParser.json())
app.use(express.json())
app.use("/",route)

app.listen(port,()=>{
    console.log(`server listening at localhost: ${port}`);
})
