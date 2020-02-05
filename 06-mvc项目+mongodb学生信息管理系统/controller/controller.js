//引入mongoose数据库
const db = require('../models/db')

//显示所有学生
exports.showStudent =  function(req,res){
    db.getAllStudent((msg)=>{
        res.render('index',{
            results:msg
        })
    });
}
//显示添加页面
exports.showAdd = (req,res)=>{
    res.render('showAdd');
}

//向数据库中添加学生信息
exports.addStudent =  function(req,res){
   db.addStudent(req.body.name,req.body,(msg)=>{
        res.send(msg);
   });
}

//显示删除页面 
exports.showRemove = (req,res)=>{
    res.render('removeStudent');
}

//向数据库中删除学生信息
exports.removeStudent =  function(req,res){
    db.removeStudent(req.body.name,(msg)=>{
         res.send(msg);
    });
 }
 
//显示修改页面 
exports.showUpdate = (req,res)=>{
    res.render('updateStudent');
}

//向数据库中修改学生信息
exports.updateStudent =  function(req,res){
    db.updateStudent(req.body.name,req.body,(msg)=>{
         res.send(msg);
    });
 }