const Joi=require('joi');
const CategorieswomanModel=require('../../../model/CategoriesModel/woman/womenCategories_model');
//**get all Categorieswoman

const addCategorieswoman=async(req,res)=>{try{
const schema=Joi.object({
    name:Joi.string().min(3).max(50).required(),
    image:Joi.string().min(3).max(500).required()
});

const{error}=schema.validate(req.body);
if(error){return res.status(400).json({success:false,error:error.details[0].message});}
const newwomanCategories=new CategorieswomanModel({
name:req.body.name,
image:req.body.image
});
await newwomanCategories.save();
res.status(200).json({success:true,message:"woman categories added successfully",data:newwomanCategories});
}catch(err){console.log(err)}};


//**add Categorieswoman
const getCategorieswoman=async(req,res)=>{try{

const findCategorieswoman=await CategorieswomanModel.find();
if(findCategorieswoman.length==0){return res.status(400).json({success:false,message:"no woman categories found"});}
else{
res.status(200).json({success:true,message:"woman categories fetched successfully",data:findCategorieswoman});}

}catch(err){console.log(err)};}




module.exports={getCategorieswoman,addCategorieswoman};