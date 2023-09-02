console.log(null==undefined) // T

console.log(null===undefined) // F

console.log(+0===-0)// T

console.log(NaN===NaN)// F
console.log(NaN==NaN)// F
console.log(Object.is(NaN,NaN))// T

console.log(Object.is(+0,-0)) // F

console.log('==>',[] == 0) // T 空数组转换为字符串 ''
console.log( {} == 0) // F 空对象转换为字符串 '[object Object]'
console.log({} == [])
console.log(undefined==false) // f

// const a = d + a

// console.log(a)