const fs = require('fs');

//读取对应文件操作
exports.read = function(number,callback){
    if(!fs.existsSync('./data'))fs.mkdirSync('./data');    
    fs.readFile('./data/'+number+'.txt',(err,data)=>{
        if(err){//如果没有对应存储的文件
            callback(-1);   ////将-1返回到控制层的回调函数中
        }else{//如果有对应存储的文件
            callback(JSON.parse(data));  //将文件中的数组对象返回到控制层的回调函数中
        }
    })
}

//保存操作
exports.save = function(number,result){
    fs.writeFile('./data/'+number+'.txt',JSON.stringify(result),(err)=>{    //如果这里写入的数据是传进来的result的话,那么数组会隐式转换为去掉中括号的数组,在之后的read函数的解析中是会报错的
        if(!err){
            console.log('保存数据成功');
        }else{
            console.log('保存数据失败');
        }
    })
}


