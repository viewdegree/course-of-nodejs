const fs = require("fs");
//写入用户的数据到磁盘中
exports.saveData = function(phone,data,callback){
    if (!fs.existsSync('./data')) fs.mkdirSync('./data');
    fs.writeFile('./data/'+phone,JSON.stringify(data),(err)=>{  
        //这里命名不需要再+.txt之后因为在getAllNum还要用到phone就不需要在对文件名进行处理了,
        /**不然在getAllnum函数又会多一步,去替换.txt
        * fileList.map((value)=>{
        * return value.replace('.txt','');
        * })
        */
        if(!err){
            callback("恭喜你,你已经下单");
        }
    })
}

//读取所有data文件夹下所有文件名
exports.getAllNum = function(callback){ //通过callback将得到的文件数组,传递给控制层
    fs.readdir('./data',(err,fileList)=>{   //fileList是所有用户的电话号码数组
        if(!err){
            callback(fileList);
        }else{
            console.log(err);
        }
    })
}