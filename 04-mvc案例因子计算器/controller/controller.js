exports.showResult = function(req,res){
    console.log(req.params.number);
    // res.send(req.params);
    res.send(req.params.number);
}