const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({
    id:{type:String,required:true,unique:true},
    heading:{type:String},
    title:{type:String,required:true},
    tagline:{type:String,required:true},
    description:{type:String,required:true},
    img:{type:Object,required:true},
    categories:{type:Array,trim:true},
    size:{type:Array},
    color:{type:Array},
    price:{type:String,required:true},
    mrp:{type:String},
    inStock:{type:Boolean,default:true}
},{timestamps:true})

module.exports=mongoose.model("Product",ProductSchema);