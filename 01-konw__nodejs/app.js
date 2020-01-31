const http = require('http');
const fs = require('fs');
const url = require('url'); //处理get请求解析成对象
const querystring = require('querystring');//处理post请求解析成对象
//路由函数
function complete(path,res){
    if(path === '/reg'){
        console.log('访问了注册页面');
    }else if(path === '/login'){
        console.log('访问了登录页面');
    }else{
        fs.readFile(`index${path}`,(err,buffer)=>{//url自带/,表示访问index文件夹下的指定文件夹名字
            if(!err){
                res.write(buffer);  //输出字符串(网页)
                res.end();
            }else{
                res.write('404 ! there is nothing');
                res.end();
            }
        });//读取静态文件
    }
}//路由函数定义
//服务器创建
let app = http.createServer((req,res)=>{
    //下列三个变量是经常传递的参数,所以提前定义好
    let path = null;
    let get = {};
    let post = {};

    if(req.method.toUpperCase() ==='GET'){
        let {pathname,query} = url.parse(req.url,true);
        path = pathname;    
        get = query;    //将get的传递的数据对象,存到get对象中
        console.log('get请求');
        console.log(path,get);
        complete(path,res);//调用路由函数
    }else if(req.method.toUpperCase() ==='POST'){
        arr = [];
        req.on('data',(data)=>{
            arr.push(data);
        });
        req.on('end',()=>{
            let buffer = Buffer.concat(arr);   //将接收post的分段数据拼接起来
            // console.log(buffuer.toString())
            post = querystring.parse(buffer.toString());    //将post传递的数据对象存到post对象中
            console.log('post请求');
            console.log(post);
        })
    }else{
        res.write('网络出现了问题,请稍后再试');
    }
})//app.js处理完毕

app.listen(3000);