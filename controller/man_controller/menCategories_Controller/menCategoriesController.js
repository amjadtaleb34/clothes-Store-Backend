const Joi=require('joi');
const CategoriesmanModel=require('../../../model/CategoriesModel/men/menCategories_model ');

const addmenCategories=async(req,res)=>{try{
const schema=Joi.object({
    name:Joi.string().min(3).max(50).required(),
    image:Joi.string().min(3).max(500).required()
});

const{error}=schema.validate(req.body);
if(error){return res.status(400).json({success:false,error:error.details[0].message});}
const newmanCategories=new CategoriesmanModel({
name:req.body.name,
image:req.body.image
});
await newmanCategories.save();
res.status(200).json({success:true,message:"man categories added successfully",data:newmanCategories});
}catch(err){console.log(err)}};;



const getmenCategories=async (req,res)=>{try{

const findCategoriesman=await CategoriesmanModel.find();
if(findCategoriesman.length==0){return res.status(400).json({success:false,message:"no man categories found"});}
else{
res.status(200).json({success:true,message:"man categories fetched successfully",data:findCategoriesman});}

}catch(err){console.log(err)};};




module.exports={getmenCategories,addmenCategories};