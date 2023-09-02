const a = [1,2,4,5,6,3,4,3,22]
// reduce 有四个参数 前一个返回值 当前值 index下标 原数组

Array.prototype.myReduce = function(cb,initialValue) {
    const arr = this
    let total = initialValue || arr[0]
    for(let i = initialValue ? 0 : 1;i<arr.length;i++) {
        total = cb(total,arr[i],i,arr)
    }
    return total
}

const ans = a.myReduce((pre,cur)=>{
    return pre + cur
},0)

const ans1 = a.reduce((pre,cur)=>{
    return pre + cur
},0)

console.log(ans,ans1)


