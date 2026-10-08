
require('dotenv').config();
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const CategorieswomanRoute=require('./route/woman/womenCategories_route/womenCategoriesRoute');
const menCategoriesRoute=require('./route/man/menCategories_route/menCategoriesRoute');
const womanProductsroute=require('./route/woman/womanproducts_route/womaproductsRoute');
const manProductsroute=require('./route/man/manproducts_route/maproductsRoute');
const kidsProductsroute=require('./route/kids/kidsproducts_route/kidsproductsRoute');
const kidsCategoriesroute=require('./route/kids/kidsCategories_route/kidsCategoriesRoute');
const popularRoute =require('./route/popular/popular');
const UserRoute =require('./route/user/user_Route');

mongoose.connect(process.env.MONGODB_URI).then(()=>{console.log('Connected to MongoDB')}).catch((err)=>{console.log(err)});
app.use(express.json());
app.use('/woman',CategorieswomanRoute);
app.use('/man',menCategoriesRoute);
app.use('/kids',kidsCategoriesroute);
app.use('/woman/products',womanProductsroute);
app.use('/man/products', manProductsroute);
app.use('/kids/products', kidsProductsroute);
app.use('/popular', popularRoute);
app.use('/User', UserRoute);


app.listen(process.env.PORT,"0.0.0.0",()=>{console.log('Server is running on port ' + process.env.PORT)});