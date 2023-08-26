
let p1 = new Promise(resolve => {
    resolve('p1')
})

let p2 = Promise.resolve('p2-OK')

let p3 = new Promise(resolve => {
    setTimeout(() => {
        resolve('p3')
    },100)
})

let p4 = Promise.reject('p4-reject')

// Promise.all 传入一个数组，依次处理。会出现两种情况：1. 所有任务都是 resolve，则返回一个 Promise 对象，其并把所有对象的解决值合成一个数组作为解决值
// 2. 其中有 reject 的 Promise 对象，则返回第一个被拒绝的 Promise 对象，后面的 Promise 对象不在执行
function all(promiseList){
    return new Promise((resolve,reject) => {
        const arr = []
        for(let i = 0;i<promiseList.length;i++){
            promiseList[i].then(v => {
                arr.push(v)
                if(arr.length === promiseList.length){
                    resolve(arr)
                }
            }).catch(e => {
                reject(e)
            })
        }
    })
}

all([p4,p2,p3]).then(v => {
    console.log('v',v)
}).catch(e => {
    console.log(e)
})

// Promise.race 返回一个 Promise 对象，返回第一个被执行的 Promise 对象，并将其解决值作为解决值
// 通过数组遍历初始化多个 Promise 对象，等待第一个返回的，执行其 then/catch 方法，注意：Promise 初始化不是一个微任务，.then/catch 方法才是微任务，
// 因此遍历数组时不涉及微任务队列的事件循环，当最先返回的 Promise 才会执行第一个微任务
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1'), 2000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2'), 1000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Promise 3'), 3000));

function race(promiseList){
    return new Promise((resolve,reject) => {
        for(let i = 0;i<promiseList.length;i++){
            promiseList[i].then(v => {
                resolve(v)
            }).catch(e => {
                reject(e)
            })
        }
    })
}

race([promise1,promise2,promise3]).then(v => {
    console.log(v)
}).catch(e => {
    console.log(e)
})


const r1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1'), 2000));
const r2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2'), 1000));
const r3 = new Promise((resolve) => setTimeout(() => resolve('Promise 3'), 3000));
let r4 = Promise.resolve('p2-OK')

let r5 = new Promise(resolve => {
    setTimeout(() => {
        resolve('p3')
    },100)
})

let r6 = Promise.reject('p4-reject')

// Promise.allSettled
function allSettled(promiseList) {
    return new Promise((resolve,reject) => {
        let count = 0

        function checkOut(){
            if(count === promiseList.length) {
                resolve(arr)
            }
        }

        const arr = []
        for(let i = 0;i<promiseList.length;i++){
            promiseList[i].then(v => {
                const obj = { status:'fulfilled',v}
                arr.push(obj)
            }).catch(e => {
                const obj = { status:'rejected',e}
                arr.push(obj)
            }).finally(() => {
                count++
                checkOut()
            }) 

            // 同步代码无法完成 allSettled 方法
            // 因为当写成同步代码时，会先执行 count++ 然后跳出循环到 allSettled.then 方法
            // count++
            // console.log('count',count)
            // if(count === promiseList.length) {
            //     console.log(123)
            //     resolve(arr)
            //     console.log(456)
            // }
        }
    })
}

allSettled([r1,r2,r3,r4,r5,r6]).then(v => {
    console.log('allSettled==>',v)
})


let a1 = Promise.reject('1-reject')
let a2 = Promise.reject('2-reject')
let a3 = Promise.reject('3-reject')
let a4 = Promise.reject('4-reject')
let a5 = Promise.reject('5-reject')
let a6 = new Promise(resolve => {
    resolve('success')
})

// Promise.any 一个成功就算成功
function any(promiseList) {
    return new Promise((resolve,reject) => {
        const errorArr = []
        for(let i = 0;i<promiseList.length;i++){
            promiseList[i].then(v => {
                resolve(v)
            }).catch(e => {
                errorArr.push(e)
                if(errorArr.length===promiseList.length){
                    reject('All promise were rejected')
                }
            })
        }
    })
    
}

any([a1,a2,a3,a4,a5,a6]).then(v => {
    console.log(v)
}).catch(e => {
    console.log(e)
})
