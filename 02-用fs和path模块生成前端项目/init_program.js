//初始化项目数据    fs和path引入模块只能放在次文件中,因为在这个文件中的函数会用到fs和path的方法
let fs = require('fs');
let path = require('path');
exports.fn = function init_program(programeData){
    let {name,fileData} = programeData; //解构赋值
    if(!fs.existsSync(name)){
        fs.mkdirSync(name);     //初始化文件夹

        fileData.forEach((value)=>{     //数组用forEach方法,里面的回调函数第一个参数是他的子项  
                let dirname = path.join(name,value.name);           //相对路径
                if(value.type==='dir'){         //创建文件夹
                    fs.mkdirSync(dirname);
                }else{                          //写入空文件
                    fs.writeFile(dirname,'',(err)=>{console.log(err);});
                }
        })
    }else{
        console.log("当前文件夹已存在");
    }

}
