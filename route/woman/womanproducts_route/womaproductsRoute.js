const express=require('express');
const womanProductsroute=express.Router();
const {getwomanProducts,addProductswoman}=require('../../../controller/woman_controller/womenProducts_Controller/womenProductsController');
womanProductsroute.get('/getwomanProducts/:categoryId',getwomanProducts);
womanProductsroute.post('/addProductswoman',addProductswoman);



module.exports=womanProductsroute;
