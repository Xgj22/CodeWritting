// 柯里化另一个典型的应用场景就是 bind 函数的实现。使用了函数柯里化的两个特点：
// 参数复用和提前返回
function curry(fn,args){
    // 获取函数的参数个数
    let length = fn.length
    // 保存参数
    args = args ? args : []
    // 返回一个回调函数,当调用时可以选中参数的个数
    // 根据参数的个数返回不同的回调
    return function(){
        // 拼接参数,这里保存了上一次调用的参数,这就是闭包的特点
        newArgs = args.concat(Array.prototype.slice.call(arguments))
        if(newArgs.length < length){
            // 参数不足以解决问题时,再次返回中间函数
            return curry.call(this,fn,newArgs)
        }else{
            // 参数足够时,调用 fn
            console.log(fn,newArgs,fn(newArgs))
            return fn.apply(this,newArgs)
        }
    }
}

function multiFn(a, b, c) {
    return a * b * c;
}

function add(a,b,c,d) {
    return a + b + c + d
}
var multi = curry(multiFn);
console.log(multi(2)(3)(4))
console.log(multi(2,3,4))
console.log(multi(2)(3,4))
console.log(multi(2,3)(4))

let addCurried = curry(add) 
addCurried = addCurried(2,3)
// console.log(addCurried(2,3))
console.log(addCurried(4,5))