const fs = require('fs');

exports.read = function(number,callback){
    if(!fs.existsSync('./data'))fs.mkdirSync('./data');    
    fs.readFile('./data/'+number+'.txt',(err,data)=>{
        if(err){//如果没有对应存储的文件
            callback(-1);
        }else{//如果有对应存储的文件
            callback(data.toString());  //将存储的文件打印出来
            //1.找到文件直接渲染
        }
    })
}


