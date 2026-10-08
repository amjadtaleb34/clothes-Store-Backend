const mongoose = require('mongoose');

const SchemaUser = mongoose.Schema({

  firstname: {
    type: String,
    minlength: 3,
    maxlength: 25,
    required: true,
  },

  lastname: {
    type: String,
    minlength: 3,
    maxlength: 25,
    required: true,
  },

  username: {
     type: String,
    minlength: 3,
    maxlength: 50,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    minlength: 3,
    maxlength: 250,
    required: true,
  
  },

 


});

const UserModel = mongoose.model( 'UserModel',SchemaUser);

module.exports = UserModel;