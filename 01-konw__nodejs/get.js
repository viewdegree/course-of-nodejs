const http = require('http');
const fs = require('fs');
const url = require('url');

let server = http.createServer((req,res)=>{
    let {path,query} = url.parse(req.url,true);
    console.log(path,query);
})

server.listen(3000);
