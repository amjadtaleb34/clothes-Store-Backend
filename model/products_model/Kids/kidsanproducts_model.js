const mongoose = require('mongoose');

const SchemaKidsProduct = mongoose.Schema({

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
    ref: 'CategorieskidsModel',
    required: true,
  },
    ispopular:{
   type:Boolean,
   default:false

  },

});

const KidsProductModel = mongoose.model( 'KidsProductModel',SchemaKidsProduct);

module.exports = KidsProductModel;