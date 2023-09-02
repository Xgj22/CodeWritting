
function Foo(name,age){
    this.name = name
    this.age = age
    // return {}
}

function newConstructor(fn,...args) {
    // new 操作符具体做了四件事，也是我们这个函数要做的
    // 创建一个空对象
    // const obj = {} // Object.create({})
    // // 将空对象的原型指向构造函数的原型
    // Object.setPrototypeOf(obj,fn.prototype) // Object.setPrototypeOf() 静态方法可以将一个指定对象的原型（即内部的 [[Prototype]] 属性）设置为另一个对象或者 null。
    const obj = Object.create(fn.prototype)
    // 将空对象作为构造函数的上下文（改变 this 指向）
    const result = fn.apply(obj,args)
    // 判断构造函数的返回值，当构造函数是基本数据类型时则不用管，如果是引用数据类型则覆盖掉 obj
    return result instanceof Object ? result : obj
}

console.log(newConstructor(Foo,'xgj',21))