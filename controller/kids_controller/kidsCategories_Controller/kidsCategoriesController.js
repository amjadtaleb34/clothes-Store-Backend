const Joi=require('joi');
const CategorieskidsModel=require('../../../model/CategoriesModel/kids/kidsCategories_model');

const addCategorieskids=async(req,res)=>{try{
const schema=Joi.object({
    name:Joi.string().min(3).max(50).required(),
    image:Joi.string().min(3).max(500).required()
});

const{error}=schema.validate(req.body);
if(error){return res.status(400).json({success:false,error:error.details[0].message});}
const newkidsCategories=new CategorieskidsModel({
name:req.body.name,
image:req.body.image
});
await newkidsCategories.save();
res.status(200).json({success:true,message:"kids categories added successfully",data:newkidsCategories});
}catch(err){console.log(err)}};


//**add Categorieskids
const getCategorieskids=async(req,res)=>{try{

const findCategorieskids=await CategorieskidsModel.find();
if(findCategorieskids.length==0){return res.status(400).json({success:false,message:"no kids categories found"});}
else{
res.status(200).json({success:true,message:"kids categories fetched successfully",data:findCategorieskids});}

}catch(err){console.log(err)};}




module.exports={getCategorieskids,addCategorieskids};