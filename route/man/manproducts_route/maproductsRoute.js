const express=require('express');
const manProductsroute=express.Router();
const {getmanProducts,addProductsmen}=require('../../../controller/man_controller/menProducts_Controller/menProductsController');
manProductsroute.get('/getmanProducts/:categoryId' , getmanProducts);
manProductsroute.post('/addProductsman', addProductsmen);



module.exports=manProductsroute;
