
function myInstanceOf(child,parent){
    if(!child) return false
    if(child.__proto__ === parent.prototype){
        return true
    }else{
        return myInstanceOf(child.__proto__,parent)
    }
}

function Person(name,age){
    this.name = name
    this.age = age
}

const p = new Person('xgj',21)

console.log(myInstanceOf(p,Person))
console.log(myInstanceOf(p,Object))