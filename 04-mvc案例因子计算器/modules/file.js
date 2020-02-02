const fs = require('fs');

//读取对应文件操作
exports.read = function(number,callback){
    if(!fs.existsSync('./data'))fs.mkdirSync('./data');    
    fs.readFile('./data/'+number+'.txt',(err,data)=>{
        if(err){//如果没有对应存储的文件
            callback(-1);   ////将-1返回到控制层的回调函数中
        }else{//如果有对应存储的文件
            callback(1);  //将1返回到控制层的回调函数中
            //1.找到文件直接渲染
        }
    })
}

//保存操作
exports.save = function(number,result){
    fs.writeFile('./data/'+number+'.txt',result,(err)=>{
        if(!err){
            console.log('保存数据成功');
        }else{
            console.log('保存数据失败');
        }
    })
}


