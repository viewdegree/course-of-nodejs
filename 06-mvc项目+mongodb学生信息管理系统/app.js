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
app.get('/addStudent',(req,res)=>{
    res.render('showAdd');
})
//前端传输新增学生名
app.post('/addStudent',controller.addStudent)
app.use(express.static('public'));  //设置静态文件
app.listen(3000);
