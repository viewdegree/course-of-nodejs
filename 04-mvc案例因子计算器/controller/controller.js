/**
 * controller层(控制层)的作用
 * 1.不牵扯计算,只负责接收app.js文件的数据和传递数据
 * 
 */
const math = require("../modules/math.js"); //获取数学的方程
const file = require("../modules/file.js")
exports.showResult = function(req,res){
    // console.log(req.params.number);
    let number = req.params.number;
    let start = new Date();
    let result = null;
    //传到read函数中
    file.read(number,function(result){//回调函数,将逻辑再写到控制层中
        if(result === -1){
             //1.计算
             var result = math(number);    //为了避免变量名冲突
            //2.存储数据
            // fs.writeFile();下一步操作
            file.save(number,result);   //调用module层中file模块的save
        }
        //3.渲染 
        res.render('showResult',{   //render会自动找到views目录下对应ejs文件
            result:result,  
            time: new Date() - start
        });  
    });
    // res.send(result);    这是渲染的一种方法,但是并不高效
}