const Cart=require('../model/cartSchema');

const addCartProducts=async(req,res)=>{
    // console.log(req.body);
    const newCart=new Cart({
        userId:req.body.userId,
        products:req.body.products,
        color:req.body.color,
        size:req.body.size,
        cartImage:req.body.cartImage,
        quantity:req.body.quantity,
    });
    console.log(req.body);
    try{
        await Cart.findOneAndDelete({userId:req.body.userId});
        const savedCart=await newCart.save();
        res.status(200).json(savedCart);
    }
    catch(err){
        res.status(500).json(err);
    }
}

const getCartProducts=async(req,res)=>{
    const {userId}=req.params;
    try{
        const products=await Cart.findOne({userId:userId});
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json(err);
    }
}


module.exports={
    addCartProducts,
    getCartProducts
}