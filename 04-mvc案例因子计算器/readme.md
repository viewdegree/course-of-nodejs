开发第一阶段:

1. 已经实现了基本的因子计算器的功能

开发第二阶段

1. 将计算好的因子做文件缓存,优化第二次查询的速度

2. 具体实现方案

   ```js
   /**
    * controller层(控制层)的作用
    * 1.不牵扯计算,只负责接收app.js文件的数据和传递数据
    * 
    */
   const math = require("../modules/math.js"); //获取数学的方程
   exports.showResult = function(req,res){
       console.log(req.params.number);
       let number = req.params.number;
       let start = new Date();
       let result = null;
       fs.readFile('',(err,data)=>{
           if(err){
               //1.计算
               result = math(number);
               //2.存储数据
               //3.渲染 
           }else{
               //1.找到文件直接渲染
           }
       })
       // res.send(result);    这是渲染的一种方法,但是并不高效
       res.render('showResult',{   //render会自动找到views目录下对应ejs文件
           result:result,  //也可以写为result
           time: new Date() - start
       });   
   }
   ```

   



mvc总结: 