const file = require('../models/file');

//保存用户的数据
exports.saveData = function(req,res){
    let {phone,food} = req.query;   //结构赋值
    file.saveData(phone,req.query,(msg)=>{//phone是用户手机号  query是数据
        res.send(msg);  //返回给ajax请求
    });     
}