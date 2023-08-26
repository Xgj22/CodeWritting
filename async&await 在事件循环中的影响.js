//async函数是对⼀些异步操作的处理⽅式，⼀旦调⽤会⽴即执⾏，其中可包含微任务和宏任务
// await语句后⾯的代码回放进微任务队列执⾏
async function async1() {
    console.log('async1 start')
    //await是等待，需要把第⼀轮微任务执⾏完，再执⾏下⾯的内容
    //await后⾯的内容执⾏完，⼜执⾏宏任务
    await async2()
    console.log('async1 end')
    console.log(123)
   }
   async function async2() {
    return Promise.resolve().then(_ => {
    console.log('async2 promise')
    })
   }
   console.log('start')
   setTimeout(function () {
    console.log('setTimeout')
   }, 0)
   async1()
   new Promise(function (resolve) {
    console.log('promise1')
    resolve()
   }).then(function () {
    console.log('promise2')
   })