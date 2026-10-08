const mongoose=require('mongoose');

const SchemaWomanCategoriesModel=mongoose.Schema({
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




const CategorieswomanModel=mongoose.model('CategorieswomanModel',SchemaWomanCategoriesModel);
module.exports=CategorieswomanModel;

