const mongoose = require('mongoose');

const SchemaWomanProduct = mongoose.Schema({

  name: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true,
  },

  description: {
    type: String,
    minlength: 5,
    maxlength: 1000,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    min: 0,
    required: true,
  },

  colors: {
    type: [String],
    required: true,
  },

  sizes: {
    type: [String],
    required: true,
  },

  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CategorieswomanModel',
    required: true,
  },
    ispopular:{
   type:Boolean,
   default:false

  },

});

const WomanProductModel = mongoose.model( 'WomanProductModel',SchemaWomanProduct);

module.exports = WomanProductModel;