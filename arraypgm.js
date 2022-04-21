// using include

// let arrayC=[11,22,33,11,44]
// let arrayD=[]

// for (let i=0;i<arrayC.length;i++){
//     if(!arrayD.includes(arrayC[i])){
//         arrayD.push(arrayC[i])
//     }
// }
// console.log(arrayD)

//using Map======================================>
// let arrayC=[11,22,33,11,44]
// let arrayD=[]

// let newArray =arrayC.map(function(el,index){
//     if(!arrayD.includes(el)){
//         arrayD.push(el)
//     }
// })
// console.log(arrayD)

// //using index    dought==========================>
// for(let i=0;i<arrayC.length;i++){
//     if(arrayD.indexOf(arrayC[i])<0){
//         arrayD.push(arrayC[i])
//     }
// }
// console.log(arrayD)

// // example of filter method==============================>

// let h=[11,22,44,-33]

// let ii= h.filter((el)=>{
//     return el>0
// })
// console.log(ii)

// //same using map
//  let i=[]
// let  g=h.map((el)=>{
//     // if(el>0){
//     //     i.push(el)
//     return el>0
//     })
// console.log(i)

// // for each
// h.forEach(function(el,index){
//     if(el>0){
//         i.push(el)
//     }
// })
// console.log(i)


// Every =====tests all the ele in the array pass the provided function. Returns boolean
// let word=['dog','bag','dig','log']

// let contain=word.every(function(el){     
//     return el.length===3
// })
// console.log(contain)
//other type that can be used
// word.every(el=>{
//retutn
//})
// or
//word.every(el=> el.length===3)


//some ==> similar to every , but returns if any of the array ele pass the test
let words =['dog','yellow','yoyo','water']
let aa=words.some(function(el){
    return el.length>4;
})

console.log(aa)

