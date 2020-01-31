//初始化项目数据
let fs = require('fs');
let path = require('path');
let  programeData = {
    name:'前端项目文件夹',      //项目文件夹名称
    fileData:[
        {
            name:'css',
            type:'dir'
        },
        {
            name:'js',
            type:'dir'
        },
        {
            name:'images',
            type:'dir'
        },
        {
            name:'index.html',
            type:'file'
        }
    ]
}

function init_program(programeData){
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

init_program(programeData);