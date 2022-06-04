const express = require('express');
const router = express.Router();
const TodoController = require("../controller/TodoContriller")
const UserController = require("../controller/UserController")
const authVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")
//user 

//create

router.get("/",TodoController.ReadTodoById);



module.exports=router;