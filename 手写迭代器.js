
const obj = {
    name:'xgj',
    age:21,
    address:'广州',
    hometown:{
        city:'汕头',
        school:'gdufe'
    }
}

// 没有迭代器的对象会报错 TypeError: obj is not iterable
// for (const iterator of obj) {
//     console.log(iterator)
// }

// 手写一个迭代器来解决问题
Object.defineProperty(obj,Symbol.iterator,{
    writable:false,
    enumerable:false,
    configurable:true,
    value:function(){
        // 在 JavaScript 中，函数内部有自己的作用域，
        // 因此在迭代器函数内部，this 的上下文会发生改变，不再指向外部的对象。
        // 为了在迭代器函数内部仍然能够访问到外部对象的属性，
        // 可以使用 self = this 将外部的 this 对象保存到一个变量 self 中。
        const self = this
        const keys = Object.keys(self)
        let index = 0
        return {
            next:function(){
                return{
                    done:index>=keys.length,
                    value:self[keys[index++]]
                }
            }
        }
    }
})

for (const iterator of obj) {
    console.log(iterator)
}