const file = require('../models/file');

//保存用户的数据
exports.saveData = function(req,res){
    let {phone,food} = req.query;   //结构赋值
    file.saveData(phone,req.query,(msg)=>{//phone是用户手机号  query是数据
        res.send(msg);  //返回给ajax请求
    });     
}

//展示所有页面
exports.showAll = function(req,res){
    file.getAllNum((numArray)=>{    //参数是所有用户的电话号码数组
        // console.log(numArray);
        res.render('all',{numArray});
        res.send(); //不需要将res再传到模型层去结束,直接在回调函数里解决
    });
}