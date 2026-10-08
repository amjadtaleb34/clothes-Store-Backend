const mongoose=require('mongoose');

const SchemamanCategoriesModel=mongoose.Schema({
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




const CategoriesmanModel=mongoose.model('CategoriesmanModel',SchemamanCategoriesModel);
module.exports=CategoriesmanModel;

