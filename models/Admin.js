const mongoose = require("mongoose")
const loginSchema=mongoose.Schema(
    {
        name:{type:String},
        username:{type:String},
        password:{type:String}
    }
)
const loginModel=mongoose.model("adminlogin",loginSchema)
module.exports=loginModel