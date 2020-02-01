const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req,res)=>{
    let {pathname,query} = url.parse(req.url,true);
    //正则匹配 /student/+任意两个数字的pathname
    if(/^\/student\/\d{2}$/.test(pathname)){
        //用slice 拿到路径的后2位数字 获取到学号
        let number = pathname.slice(-2);  
        console.log(number);            //拿到了请求的学号
        fs.readFile('./student',(err,data)=>{
            if(err)return;
            let stuInfo = JSON.parse(data.toString());  //拿到了数据库student中的存储的数据对象
            console.log(stuInfo);       //拿到了数据库对象
        })
    }
})
server.listen(3000);