const express = require("express");
const app = express();

app.get('/:number',(req,res)=>{
    console.log(req.params.number);
    res.send(req.params);
    res.send(req.params.number);
})

app.use(express.static('public'));
app.listen(3000);