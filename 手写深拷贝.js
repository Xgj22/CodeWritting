let obj1 = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'coding'],
    address: {
      street: '123 Main St',
      city: 'New York'
    }
};


function deepCpoy(obj){
    if(typeof obj !== 'object' || obj === null) return obj

    // 解决深拷贝中循环引用的问题
    // 检查缓存，如果已经拷贝过该对象，则直接返回缓存中的拷贝结果
    if (cache.has(obj)) {
        return cache.get(obj);
    }
    // 应用
    const newObj = Array.isArray(obj) ? [] : {}

    // 将拷贝结果存入缓存
    cache.set(obj, clone);

    for(let key in obj){
        if(obj[key] !== null && typeof obj[key] === 'object'){
            newObj[key] = deepCpoy(obj[key])
        }else{
            newObj[key] = obj[key]
        }
    }

    return newObj
}

const newObj = deepCpoy(obj1)
obj1.name ='xgj'
obj1.address.city = 'gz11'
console.log(obj1,'--------------',newObj)

// function deepClone(obj) {
//     if (obj === null || typeof obj !== 'object') {
//       return obj;
//     }
  
//     let clone = Array.isArray(obj) ? [] : {};
  
//     for (let key in obj) {
//       if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         clone[key] = deepClone(obj[key]);
//       }
//     }
  
//     return clone;
//   }

//   console.log(deepClone(obj1))

console.log('A'.charCodeAt(),'Z'.charCodeAt(),'a'.charCodeAt())



