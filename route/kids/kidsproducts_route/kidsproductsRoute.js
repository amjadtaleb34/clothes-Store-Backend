const express=require('express');
const kidsProductsroute=express.Router();
const {getkidsProducts,addProductskids}=require('../../../controller/kids_controller/kidsProducts_Controller/kidsProductsController');
kidsProductsroute.get('/getkidsProducts/:categoryId',getkidsProducts);
kidsProductsroute.post('/addProductskids', addProductskids);



module.exports=kidsProductsroute;
