const Fav=require('../model/favSchema');

const addFavProducts=async(req,res)=>{
    // console.log(req.body);
    const newFav=new Fav({
        userId:req.body.userId,
        products:req.body.products,
        color:req.body.color,
        size:req.body.size,
        cartImage:req.body.cartImage,
        quantity:req.body.quantity,
    });
    console.log(req.body);
    try{
        await Fav.findOneAndDelete({userId:req.body.userId});
        const savedFav=await newFav.save();
        res.status(200).json(savedFav);
    }
    catch(err){
        res.status(500).json(err);
    }
}

const getFavProducts=async(req,res)=>{
    const {userId}=req.params;
    try{
        const products=await Fav.findOne({userId:userId});
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json(err);
    }
}


module.exports={
    addFavProducts,
    getFavProducts
}