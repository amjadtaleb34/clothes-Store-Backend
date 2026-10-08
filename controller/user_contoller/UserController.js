const Joi=require('joi');
const Bcrypt=require('bcrypt');
const UserModel=require('../../model/user_model/user_model');
const Jwt=require('jsonwebtoken');



const rejesterUser=async(req,res)=>{try{
const schema=  Joi.object({
firstname:Joi.string().min(3).max(25).required(),
lastname:Joi.string().min(3).max(25).required(),
username:Joi.string().min(3).max(50).required(),
password:Joi.string().min(3).max(250).required(),
});

const {error}=schema.validate(req.body);
if(error){
return res.status(400).json({message:error.details[0].message});}

const findeuser= await UserModel.findOne({username:req.body.username});
if(findeuser){
return res.status(400).json({message:'username already exists'});}
const newuser= new UserModel({
firstname:req.body.firstname,
lastname:req.body.lastname,
username:req.body.username,
password:req.body.password,
});
 const salt=await Bcrypt.genSalt(10);
newuser.password=await Bcrypt.hash(newuser.password,salt);
await newuser.save();
res.status(201).json({message:'user created successfully',user:newuser});


}catch(error){res.status(500).json({ message: error.message})}};




const LoginUser=async(req,res)=>{try{
const schema=  Joi.object({
username:Joi.string().min(3).max(50).required(),
password:Joi.string().min(3).max(250).required(),
});

const {error}=schema.validate(req.body);
if(error){
return res.status(400).json({message:error.details[0].message});}

const findeuser= await UserModel.findOne({username:req.body.username});
if(!findeuser){
return res.status(400).json({message:'username or password is incorrect'});}
const isPasswordCorrect =
    await Bcrypt.compare(
        req.body.password,
        findeuser.password
    );
if(!isPasswordCorrect){
return res.status(400).json({message:'username or password is incorrect'});}
const token=Jwt.sign({id:findeuser._id},process.env.JWT_SECRET,{expiresIn:'1d'});
res.status(200).json({message:'Login successfully',user:findeuser,token:token});


}catch(error){res.status(500).json({ message: error.message})}};





module.exports={rejesterUser,LoginUser};