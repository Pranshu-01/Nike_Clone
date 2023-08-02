const Product=require('../model/productSchema');

const getProducts=async(req,res)=>{
    const qCategory=req.query.category;
    try{
        let products;

        if(qCategory){
            products=await Product.find({
            //     $or:[
            //         {
            //         categories:{
            //             $in:[qCategory]
            //         }
            //     },
            //     {title:{$eq:qCategory}},
            // ]
            categories:{
                $in:[qCategory]
            }
            })
        }
        else{
            products=await Product.find();
        }

        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json(err);
    }
}

const getProduct=async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id);
        res.status(200).json(product);
    }
    catch(err){
        res.status(500).json(err);
    }
}


module.exports={
    getProducts,
    getProduct
}