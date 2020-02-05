const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/student',   //student为数据库名
{useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(err){    //如果连接成功
        console.log('数据库连接失败');
        return;
    }
    console.log('数据库连接成功!');
    //如果连接失败
    //设置数据库student中的数据格式
    let studentSchema = new mongoose.Schema({
        name:String,
        chinese:Number,
        math:Number,
        english:Number
    })

    //指定集合class中的数据结构对象,以后只要new一下就会自动添加到clss结合中,
    //注意命名集合名的时候要加上s,不然会自动帮你加有时候会加s有时候会加es(比如class)
    //要用小写,不然会自动将大写变交接
    let Student = mongoose.model('students',studentSchema);
    // new Student({
    //     name: 'whale',
    //     chinese: 110,
    //     math: 145,
    //     english: 150
    // }).save();
    exports.getAllStudent = function(callback){
        Student.find().then((res)=>{  //查询成功返回msg
            callback(res);
        })
    }
});