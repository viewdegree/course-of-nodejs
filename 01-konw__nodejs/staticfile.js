const http = require('http');
const fs = require('fs');

let server = http.createServer((req,res)=>{
    let url = req.url; 
    fs.readFile(`index${url}`,(err,buffer)=>{//url自带/,表示访问index文件夹下的指定文件夹名字
        if(!err){
            res.write(buffer);  //输出字符串(网页)
            res.end();
        }else{
            res.write('404 ! there is nothing');
            res.end();
        }
    })
});
server.listen(3000);
