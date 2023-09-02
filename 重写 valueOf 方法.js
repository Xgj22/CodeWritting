// let a = 'a'

// console.log(a.valueOf())

// console.log(a.toString())

// Object

const a = {
    _a:0,
    valueOf:function(){
        return ++this._a
    }
}

const obj1 = {
    a : 'a',
    name:'xgj'
}

if(a==1 && a==2 && a==3){
    console.log('重写成功')
}

// const b = new Proxy(obj1,{
//     get(target){
//         console.log('123',target)
//         let value = 0
//         return () => ++ value
//     },
//     set(target,value){
//         console.log(546)
//     }
// })
// b.name
// b.name = 'pp'

// const k = new Proxy({},{
//     get(target){
//         return 
//     }
// })