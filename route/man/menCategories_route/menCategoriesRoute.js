const express=require('express');
const menCategoriesRoute=express.Router();
const {getmenCategories,addmenCategories}=require('../../../controller/man_controller/menCategories_Controller/menCategoriesController');
menCategoriesRoute.get('/getmenCategories',getmenCategories);
menCategoriesRoute.post('/addmenCategories',addmenCategories);



module.exports=menCategoriesRoute;
