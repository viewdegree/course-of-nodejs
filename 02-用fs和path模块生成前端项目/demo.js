let initProgram = require("./init_program.js")

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
//执行initProgram模块中的fn函数
initProgram.fn(programeData);
