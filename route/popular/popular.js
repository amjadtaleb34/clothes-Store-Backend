const express=require('express');
const popularRoute= express.Router();
const KidsProductModel=require('../../model/products_model/Kids/kidsanproducts_model');
const ManProductModel=require('../../model/products_model/man/manproducts_model');
const WomanProductModel=require('../../model/products_model/woman/womanproducts_model');





popularRoute.get('/getpopular',async(req,res)=>{try{

const findeman=await ManProductModel.find({ispopular:true}).limit(4);
const findwoman=await WomanProductModel.find({ispopular:true}).limit(4);
const findkids=await KidsProductModel.find({ispopular:true}).limit(4);
 const popularProducts = [
      findeman,
      findwoman,
      findkids
    ];
res.json({ popularProducts });

}catch(error){res.status(500).json({ message: error.message})}});





module.exports=popularRoute;









