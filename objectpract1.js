// //pgm 1
// let numbers ={
//     a:2,
//     b:3,
//     c:4
// }
// console.log(numbers)
// console.log(numbers['b'])

// for(let key in numbers){
//     numbers[key]= numbers[key]*numbers[key]
// }
// console.log(numbers)

//program 2
// odd and even count

let a=[22,55,33,44,78,85,87]
// let b=[]
// let c=[]
// let evencount=0
// let oddcount=0

// for (let i=0;i<a.length;i++){
//     if(a[i]%2==0){
//     evencount++
//     //b.push(a[i])
//    // [b,...a[i]]
//     }
//     else{
//         oddcount++
//     }
// }
// console.log(evencount)
// console.log(oddcount)
// console.log(b)

//using array
//let a=[22,55,33,44,78,85,87]
let d=[]
let e=[]

//let b=0;
// let evencount=a.reduce(function(acc,el){
//     let b =el % 2 === 0? 1:0
//     if(el%2==0){
//         d.push(el)
//     }
//     //d.push(el%2)
//     // if(el%2==0){
//     //     b+=1
//     // }
//     // else{
//     //     b=0;
//     // }
    
//      return acc+b
// },0)
// console.log(evencount)
// console.log(d)

// let oddcount=a.reduce(function(acc,el){
//     let a=el%2 !==0?1:0
//     return acc+a
// },0)
// console.log(oddcount)

// count pgm

// let sum=[ 11,22,33,44,55,88,88,77,88,99,88,88,12]
// let count=0
// for (let i=0;i<sum.length;i++){
//     if(sum[i]==88){
//         count=count+1
//     }
// }
// console.log(count)

// book count pgm3
let word =["b","o","o","k"]
let result={}
//console.log(result)

//output  { b:1,0:2,k:1}  didnot get

for(let i=0;i<word.length;i++){
    if(result[word[i]]) {
        result[word[i]=result[word[i]]]+1
    }
else{
    result[word[i]]=1
}
}
console.log(result)

// pgm 4

// let r=['red','red','green','blue','red','green','purple']
// let result={}
// for (let key in result){
//     result[key]=math.floor(result[key]/2)
// }
// console.log(result)

// or
// for(let i=0;i<r.length;i++){
//     if(result[r[i]]){
//         result[r[i]]=result[r[i]]+1

//     }
//     else{
//         result[r[i]]=1
//     }
// }
// console.log(result)