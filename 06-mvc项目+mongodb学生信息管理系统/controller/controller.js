//引入mongoose数据库
const db = require('../models/db')

exports.showStudent =  function(req,res){
    db.getAllStudent((msg)=>{
        res.render('index',{
            results:msg
        })
    });
}
//想数据库中添加学生信息
exports.addStudent =  function(req,res){
   console.log(req.body);
   db.addStudent(req.body.name,req.body,(msg)=>{
        res.send(msg);
   });
}