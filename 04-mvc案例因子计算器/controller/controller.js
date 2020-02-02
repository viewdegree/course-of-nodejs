/**
 * controller层(控制层)的作用
 * 1.不牵扯计算,只负责接收app.js文件的数据和传递数据
 * 
 */
const math = require("../modules/math.js"); //获取数学的方程
exports.showResult = function(req,res){
    console.log(req.params.number);
    let number = req.params.number;
    let result = math(number);
    // res.send(result);    这是渲染的一种方法,但是并不高效
    res.render('showResult');   //render会自动找到views目录下对应ejs文件
}