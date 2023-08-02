const express=require('express');
const { getProducts, getProduct } = require('../controllers/productControllers');
const router=express.Router();


// get all products
router.get('/',getProducts);
router.get('/find/:id',getProduct);



module.exports=router;