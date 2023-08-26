const arr = [0,1,2,3,-9,4,5,5,5,5,5]

const ans = arr.some(item => {
    console.log('++++')
    return item < 0
})

console.log(ans)

const rr = arr.find(item => {
    console.log('==============')
    return item < 0
})
console.log(rr)