const mongoose=require('mongoose');

const SchemaKidsCategoriesModel=mongoose.Schema({
"name":{
    type:String,
    minlength:3,
    maxlength:50,
    required: true,
},
"image":{
 type:String,
 minlength:3,
    maxlength:500,
    required: true,

}

});




const CategorieskidsModel=mongoose.model('CategorieskidsModel',SchemaKidsCategoriesModel);
module.exports=CategorieskidsModel;

