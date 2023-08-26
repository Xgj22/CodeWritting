const a = ['1','2','3']

const b = {
    a:"12322",
    m:444
}

function Person(name,sex){
    this.name = name
    this.sex = sex
}

const p = new Person('xgj','男')

console.log(typeof p)

console.log(p instanceof Array) 
