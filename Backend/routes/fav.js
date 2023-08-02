const express=require('express');
const { addFavProducts,getFavProducts } = require('../controllers/favController');
const router=express.Router();

router.post('/',addFavProducts);
router.get('/find/:userId',getFavProducts);

module.exports=router;