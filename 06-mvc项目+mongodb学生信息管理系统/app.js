const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const controller = require('./controller/controller.js');   //引入控制层
app.set('view engine', 'ejs');              //开启模板引擎
app.use(bodyParser.urlencoded({ //使用bodyParser中间件,开启bodyParser
    extended: false      //不写次对象控制台会显示提示语句
}));
// 返回数据库中所有的成绩
app.get('/', controller.showStudent);

// 显示addStudent
app.get('/addStudent',controller.showAdd)
// 前端传输新增学生信息,进行新增操作
app.post('/addStudent',controller.addStudent);

// 显示removeStudent
app.get('/removeStudent',controller.showRemove)
// 前端传输需要删除的学生名,进行删除操作
app.post('/removeStudent',controller.removeStudent);

// 显示updateStudent
app.get('/updateStudent',controller.showUpdate)
// 前端传输需要更新的学生名,进行更新操作
app.post('/updateStudent',controller.updateStudent);

// 显示checkStudent
app.get('/checkStudent',controller.showCheck)
// 前端传输需要删除的学生名,进行删除操作
app.post('/checkStudent',controller.checkStudent);

app.use(express.static('public'));  //设置静态文件
app.listen(3000);
