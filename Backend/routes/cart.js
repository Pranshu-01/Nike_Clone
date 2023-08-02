const express=require('express');
const { addCartProducts,getCartProducts } = require('../controllers/cartController');
const router=express.Router();

router.post('/',addCartProducts);
router.get('/find/:userId',getCartProducts);

module.exports=router;