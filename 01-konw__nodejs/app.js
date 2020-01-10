const http = require('http');
const fs = require('fs');
const url = require('url'); //处理get请求解析成对象
const querystring = require('querystring');//处理post请求解析成对象

let app = http.createServer((req,res)=>{
    if(req.method.toUpperCase() ==='GET'){
        let {path,query} = url.parse(req.url,true);
        console.log('get请求');
        console.log(path,query);
    }else if(req.method.toUpperCase() ==='POST'){
        arr = [];
        req.on('data',(data)=>{
            arr.push(data);
        });
        req.on('end',()=>{
            let buffer = Buffer.concat(arr);   //将接收post的分段数据拼接起来
            // console.log(buffuer.toString())
            let postdata = querystring.parse(buffer.toString());
            console.log('post请求');
            console.log(postdata);
        })
    }else{
        fs.readFile(`index/demo.html`,(err,buffer)=>{//url自带/,表示访问index文件夹下的指定文件夹名字
            if(!err){
                res.write(buffer);  //输出字符串(网页)
                res.end();
            }else{
                res.write('404 ! there is nothing');
                res.end();
            }
        })
    }
})

app.listen(3000);