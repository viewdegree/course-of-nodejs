//引入mongoose数据库
const db = require('../models/db')

exports.showStudent =  function(req,res){
    db.getAllStudent((msg)=>{
        res.render('index',{
            results:msg
        })
    });
}
//向数据库中添加学生信息
exports.addStudent =  function(req,res){
   db.addStudent(req.body.name,req.body,(msg)=>{
        res.send(msg);
   });
}


//向数据库中删除学生信息
exports.removeStudent =  function(req,res){
    db.removeStudent(req.body.name,(msg)=>{
         res.send(msg);
    });
 }