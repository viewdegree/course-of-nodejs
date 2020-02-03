const express = require("express");
const app = express();
const controller = require("./controller/controller.js");
app.set("view engine","ejs");   //开启模板引擎

//将请求到的数据保存到服务器的硬盘中
app.get('/order',controller.saveData);
//接收静态文件
app.use(express.static('public'));
app.listen(3000);