//Spread operator

let trans=[22,44,33,67,88,89]
function lastfive(a,b,c,d,e){
    console.log(a+b+c+d+e)
}
//lastfive(trans[0],trans[1],trans[2],trans[3],trans[4])
lastfive(...trans)


//Rest operator
// function sumall(...arr){
//   //  console.log(arr)
//     return arr.reduce(function(acc,el){
//         return acc+el
//     },0)
// }
// let aa=sumall(11,22,33,44,55,55,66,77,45,46)
// console.log(aa)

function above(a,...arr){
    return arr.filter(function(el){
        return el>a
    })
}
let aaaa=above(12,13,14,66,56,47,45,34)
console.log(aaaa)

//1,2,3,4 =====> ...arr(rest)
//[1,2,3]======> ...arr(spread)