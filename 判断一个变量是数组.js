let arr = [1,2,3]

let k = {name:'xgj'}

let fun = () => console.log(123)

console.log(Array.isArray(k))

console.log(arr.constructor===Array)

console.log(arr.constructor.toString().indexOf('Array')!=-1)

console.log(arr instanceof Array)
console.log('=>',arr instanceof Object)

console.log('==>',typeof arr)
console.log('===>',typeof fun)
console.log(typeof new Date())
console.log(typeof Symbol())

console.log(fun instanceof Function)
console.log(fun.constructor===Function)
console.log(Object.prototype.toString.call(arr).indexOf('Array')!==-1)