const Joi=require('joi');
const ManProductModel=require('../../../model/products_model/man/manproducts_model');


const addProductsmen=async(req,res)=>{try{
const schema=Joi.object({
    name:Joi.string().min(3).max(100).required(),
    description:Joi.string().min(5).max(1000).required(),
    image:Joi.string().min(3).max(500).required(),
    price:Joi.number().min(0).required(),
    colors:Joi.array().items(Joi.string()).required(),
    sizes:Joi.array().items(Joi.string()).required(),
    categoryId:Joi.string().required(),
    ispopular:Joi.boolean().default(false),
});

const{error}=schema.validate(req.body);
if(error){return res.status(400).json({success:false,error:error.details[0].message});}

const newProductsman=new  ManProductModel({
name:req.body.name,
description:req.body.description,
image:req.body.image,
price:req.body.price,
colors:req.body.colors,
sizes:req.body.sizes,
categoryId:req.body.categoryId,

});
await newProductsman.save();
res.status(201).json({success:true,message:"man products added successfully",data:newProductsman});
}catch(err){console.log(err)}};



const getmanProducts=async(req,res)=>{try{

const findmanProducts=await ManProductModel.find({categoryId:req.params.categoryId});
if(findmanProducts.length==0){return res.status(400).json({success:false,message:"no man products found"});}
else{
res.status(200).json({success:true,message:"man products fetched successfully",data:findmanProducts});}

}catch(err){console.log(err)};}



module.exports={getmanProducts,addProductsmen};