const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req,res)=>{
    let {pathname,query} = url.parse(req.url,true);
    res.setHeader('content-type', 'text/html;charset=utf-8');
    //正则匹配 /student/+任意两个数字的pathname
    if(/^\/student\/\d{2}$/.test(pathname)){
        //用slice 拿到路径的后2位数字 获取到学号
        let number = pathname.slice(-2);  
        console.log(number);            //拿到了请求的学号
        fs.readFile('./student',(err,data)=>{
            if(err)return;
            let stuInfo = JSON.parse(data.toString());  //拿到了数据库student中的存储的数据对象
            console.log(stuInfo);       //拿到了数据库对象
            if(stuInfo.hasOwnProperty(number)){ //判断数据对象中是否存在查询的学号
                res.write(`<h4>你的学号是:${number}<\h4>`);
                res.write('<h5>你的姓名是:'+stuInfo[number]['username']+'<\h5>');
                res.write('<h5>你的语文成绩是:'+stuInfo[number]['chinese']+'<\h5>');
                res.write('<h5>你的数学成绩是:'+stuInfo[number]['math']+'<\h5>');
                res.write('<h5>你的英语成绩是:'+stuInfo[number]['english']+'<\h5>');
                res.end();
            }else{
                res.end("没有这位学生");
            }
            
        })
    }
})
server.listen(3000);