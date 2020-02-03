const express = require("express");
const app = express();
const controller = require('./controller/controller.js');   //引入控制层
app.set('view engine','ejs');
app.get('/:number',controller.showResult)   //不能写成controller.showResult(req,res)的形式

app.use(express.static('public'));
app.listen(3000);