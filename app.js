const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const json = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const loginModel = require("./models/Admin")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://Annmariyasabu:annmariya@cluster0.gs6ae.mongodb.net/swiggyappdb?retryWrites=true&w=majority&appName=Cluster0")

app.get("/test",(req,res)=>{
    res.json({"status":"success"})
})

app.post("/adminsignup",(req,res)=>{
    let input=req.body
    let hashedpassword=bcrypt.hashSync(input.password,10)
    input.password=hashedpassword
    console.log(input)
    let result=new loginModel(input)
    result.save()
    res.json({"status":"success"})

})



app.listen(5050,()=>{
    console.log("server started")
})