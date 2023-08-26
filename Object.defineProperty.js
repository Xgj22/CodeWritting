let obj = {
    age:21
}

Object.defineProperty(obj,'name',{
    configurable:true,// 表示可配置的,该属性的描述符才可以发生改变,比如删除,再次利用 Object.defineProperty 修改等等
    enumerable:true,// 设置可枚举属性,在打印的时候才可以打印出来
    writable:true,
    value:'xgj'
})

obj.name = 'curry'

// delete obj.name

// console.log(obj)

'---------------------------------------------------------------------------------------'
// 以下代码证明了 defineProperty 是可以监听到数组下标的变化的,但是无法监听到 push,unshift 的变化
let arr = ['a','s','d','f','g','k'];
function testDefineProperty(data, key, val) {
  Object.defineProperty(data, key, {
    get() {
      console.log('访问了',val);
      return val
    },
    set(newV) {
      if (newV !== val) {
        val = newV;
        console.log('检测到变更');
      }
    },
  });
}

// 实现一个遍历函数 Observer ,解决循环调用栈溢出的问题
function Observer(obj) {
    Object.keys(obj).forEach((key) => {
        testDefineProperty(obj, key, obj[key])
    })
}

Observer(arr)

// console.log(arr[3] = '44')

// push/pop 没办法监听到
arr.push('pp')
arr.pop()
arr.length = 10
// shift/unshift 可以监听到
// arr.shift()
// arr.unshift('a')

// console.log(arr[6])

'--------------------------------------------------------------------------------------'

let person = {
    name: '',
    age: 0
}
// 实现一个响应式函数
function defineProperty(obj, key, val) {
    Object.defineProperty(obj, key, {
        get() {
            console.log(`访问了${key}属性`)
            return val
        },
        set(newVal) {
            console.log(`${key}属性被修改为${newVal}了`)
            val = newVal
        }
    })
}
// 实现一个遍历函数Observer
function Observer(obj) {
    Object.keys(obj).forEach((key) => {
        defineProperty(obj, key, obj[key])
    })
}
Observer(person)
person.age = 18
console.log(person.age)

// 新增属性
person.gender = 'man'
// 新增属性无法触发 getter/setter
delete person.age
// 删除属性也无法触发 getter/setter
console.log(person)
    