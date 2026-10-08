const express=require('express');
const CategorieswomanRoute=express.Router();
const {getCategorieswoman,addCategorieswoman}=require('../../../controller/woman_controller/womenCategories_Controller/womenCategoriesController');
const {verifyToken}=require('../../../Middleware/authMiddleware');
CategorieswomanRoute.get('/getwomenCategories',verifyToken,getCategorieswoman);
CategorieswomanRoute.post('/addwomenCategories',addCategorieswoman);



module.exports=CategorieswomanRoute;
