/**
 * 删除最外面的括号
 * @param {*} S 
 */
var r = function (S){
    if(S == null ) return false

    let res = ''
    let count = 0
    for(let c of S){
        if(c == '(' && count++ >0) res += c
        if(c == ')' && count-- >1) res+= c
    }
    return res
}
