exports.showResult = function(req,res){
    console.log(req.params.number);
    let number = req.params.number;
    let result = [];
    //计算出对应的约束
    for(let i=1;i<=number;i++){
        if(number%i===0){
            result.push(i)
        }
    }
    res.send(result);
}