const express = require("express");
const app = express();

app.set("view engine","ejs");   //开启模板引擎

app.get('/order',(req,res)=>{
    console.log(req.query);
    res.send('ok');
})
//接收静态文件
app.use(express.static('public'));
app.listen(3000);