const Joi=require('joi');
const womanProductsModel=require('../../../model/products_model/woman/womanproducts_model');
//**get all Categorieswoman

const addProductswoman=async(req,res)=>{try{
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

const newProductswoman=new womanProductsModel({
name:req.body.name,
description:req.body.description,
image:req.body.image,
price:req.body.price,
colors:req.body.colors,
sizes:req.body.sizes,
categoryId:req.body.categoryId
});
await newProductswoman.save();
res.status(201).json({success:true,message:"woman products added successfully",data:newProductswoman});
}catch(err){console.log(err)}};


//**get Productswoman
const getwomanProducts=async(req,res)=>{try{

const findwomanProducts=await womanProductsModel.find({categoryId:req.params.categoryId});
if(findwomanProducts.length==0){return res.status(400).json({success:false,message:"no woman products found"});}
else{
res.status(200).json({success:true,message:"woman products fetched successfully",data:findwomanProducts});}

}catch(err){console.log(err)};}



module.exports={getwomanProducts,addProductswoman};