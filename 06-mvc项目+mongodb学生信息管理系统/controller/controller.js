//引入mongoose数据库
const db = require('../models/db')

exports.showStudent =  function(req,res){
    db.getAllStudent((msg)=>{
        res.render('index',{
            results:msg
        })
    });
    
}