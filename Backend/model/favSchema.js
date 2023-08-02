const mongoose=require('mongoose');

const FavSchema=new mongoose.Schema({
    userId:{type:String,required:true,unique:true},
    products:[
        {
        product:{type:Object},
        color:{type:String},
        size:{type:String},
        cartImage:{type:String},
        quantity:{type:String}
        }
    ],
});

module.exports=mongoose.model("Fav",FavSchema);