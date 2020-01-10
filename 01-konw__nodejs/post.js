const http = require('http');
const querystring = require('querystring');
let server = http.createServer((req,res)=>{
    let arr = [];
    req.on('data',(data)=>{
        arr.push(data);
        // console.log(arr)
    })
    req.on('end',()=>{
        let buffer = Buffer.concat(arr);   //将接收post的分段数据拼接起来
        // console.log(buffuer.toString())
        let postdata = querystring.parse(buffer.toString());
        console.log(postdata);
    })

})

server.listen(3000);
