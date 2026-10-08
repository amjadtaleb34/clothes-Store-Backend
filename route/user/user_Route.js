const express=require('express');
const UserRoute= express.Router();
const {rejesterUser,LoginUser}=require('../../controller/user_contoller/UserController');





UserRoute.post('/rejesteruser',rejesterUser);


UserRoute.post('/loginuser',LoginUser);




module.exports=UserRoute;









