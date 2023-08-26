const a = [1,2,3,4]
const b = [8,9,[10,27,[5,[9,0],7]]]

const c = a.concat(b)

function pp(b){
    let res = []
    for(let i = 0;i<b.length;i++){
        if(Array.isArray(b[i])){
            res = res.concat(pp(b[i]))
        }else{
            res.push(b[i])
        }
    }
    return res
}

console.log(pp(b))
console.log(Infinity)
console.log(b.flat(Infinity))
