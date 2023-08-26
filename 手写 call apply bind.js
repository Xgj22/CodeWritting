const obj1 = {
    name:'xgj',
    age:21,
    getName : function(a,b){
        // console.log(this)
        console.log(this.name)
        console.log(a,b)
    }
}

const obj2 = {
    name:'iop',
    age:12,
    school:'GDUFE'
}

Function.prototype.myApply = function(context,args){
    context = context || window
    args = args || []
    const key = Symbol()
    console.log('==>',this)
    context[key] = this
    const result = context[key](...args)
    delete context[key]
    return result
}

obj1.getName.myApply(obj2,['11','22'])

Function.prototype.myCall = function(context,...args){
    context = context || window
    args = args ? args : []
    const key = Symbol()
    // 隐式绑定
    context[key] = this
    const result = context[key](...args)
    delete context[key]
    return result
}

obj1.getName.myCall(obj2,'a','b')

Function.prototype.myBind = function(context,...args){
    const fn = this
    args = args ? args : []

    return function newFn(...newArgs){
        console.log('-->',fn)
        // 如果绑定后的函数被当成 构造函数 来调用
        // new 的时候会改变 this 的指向, 下面例子中的 obj1.getName 指向 newFn
        if(fn instanceof newFn){
            return new fn(...args,...newArgs)
        }else{
            // 否则返回改变 this 指向后的函数
            return fn.apply(context,[...args,...newArgs])
        }
    }
}

const res = obj1.getName.myBind(obj2,'qq')
res('rr')

const t1 = new res('www')
console.log(t1)