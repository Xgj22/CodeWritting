// 利用 JSON.stringfy() 和 JSON.parse() 实现对象深拷贝，但是这种方法存在缺陷
// 处理循环引用：如果对象存在循环引用，即使用这种方法进行深拷贝会导致无限递归
// 无法复制特殊对象：某些特殊对象，如 Date 对象、正则表达式、Map Set对象等，会失去其特殊的属性和行为 
let obj = {
    name:'xgj',
    age:21,
    hobby:['篮球','排球','足球'],
    info:{
        job:'嘉为科技',
        school:{
            GDUFE:{
                IT:'计算机科学与技术'
            }
        }
    }
}

// let jsonTest = {
//     "name":'hhh',
//     "jj":99,
//     "ll":{
//         "oo":"pp"
//     }
// }

const str = JSON.stringify(obj)
const json = JSON.parse(str)

json.name = 'opop'
console.log(json)
console.log(obj)

let obj1 = {
    name:'xgj',
    age:21,
    hobby:['篮球','排球','足球'],
    info:{
        job:'嘉为科技',
        school:{
            GDUFE:{
                IT:'计算机科学与技术'
            }
        }
    }
}

let obj2 = Object.assign({},obj1)

obj2.name = '2222'
obj2.info.job = '腾讯'
console.log('obj1=>',obj1,'obj2=>',obj2)

let obj3 = JSON.parse(JSON.stringify(obj1))

