//用于数学计算
/**
 * @param {num} number 路由要请求的数字
 * @return {array} 返回参数number的所有的因数 
 */
module.exports = function(number){
    let result = [];
    //计算出对应的约束
    for(let i=1;i<=number;i++){
        if(number%i===0){
            result.push(i)
        }
    }
    return result;
}