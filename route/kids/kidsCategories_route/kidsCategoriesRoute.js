const express=require('express');
const CategorieskidsRoute=express.Router();
const {getCategorieskids,addCategorieskids}=require('../../../controller//kids_controller/kidsCategories_Controller/kidsCategoriesController');
CategorieskidsRoute.get('/getkidsCategories',getCategorieskids);
CategorieskidsRoute.post('/addkidsCategories',addCategorieskids);



module.exports=CategorieskidsRoute;
