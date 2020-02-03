const fs = require("fs");
//写入用户的数据到磁盘中
exports.saveData = function(phone,data,callback){
    if (!fs.existsSync('./data')) fs.mkdirSync('./data');
    fs.writeFile('./data/'+phone,JSON.stringify(data),(err)=>{
        if(!err){
            callback("恭喜你,你已经下单");
        }
    })
}