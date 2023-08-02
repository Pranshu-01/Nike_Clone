const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    firstname:{type:String,required:true},
    lastname:{type:String},
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

module.exports=mongoose.model("User",UserSchema);

