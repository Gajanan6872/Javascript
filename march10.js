// Object -property and method
//method =action and return type

let city='Ugar'

// let a=city.toLocaleLowerCase()
// console.log(a)

// let b=city.toUpperCase()
// console.log(b)
//method chaining
let city2="Athani"

let aa=city2.toLowerCase().toUpperCase().length
console.log(aa)

//includes
// let veg="tomato"
// let bb=veg.includes('to')
// console.log(bb)
//index of

// let c=veg.indexOf('m')
// console.log(c)

let fruits='apple banana papaya grapes'
let userinput='grapes'
// if(fruits.includes(userinput)){
//     console.log('fruit is available')
// }
// else{
//     console.log('fruit is not available')
//}
//same using index of
// if(fruits.indexOf(userinput)>=0){
//     console.log('fruit is available')
// }
// else{
//     console.log('fruit is not available')
// }


//Trim, trim start , trimend

// let food = " gobi "
// let k=food.trimEnd()
// console.log(k)

// let j=food.trim()
// console.log(j)

// let i=food.trimStart()
// console.log(i)


// to avaid spaces
// let m="pu ne"
// let rev=""

// for(i=0;i<m.length;i++){
// // //console.log(r[i])
// if(m[i]!==" "){
//     rev=rev+m[i];
// //     // for reverse
// //    // rev=m[i]+rev
// }
//  }
//  console.log(rev)

//Split and join
// let name1="Gajanan"

// let a1=name1.split("a")
// console.log(a1)
// console.log(a1.join("a"))

// To count number of vowels

// let sent="I am new to js".toLowerCase()
// let count=0;

// for(let i=0;i<sent.length;i++){
//     if(sent[i]=='a'||sent[i]=='e'||sent[i]=='i'||sent[i]=='o'||sent[i]=='u' ){
//      count=count+1;
//     }

// }
// console.log(count)


//To find number of a e i o u ====================================> imp
 //let nm='anironio'
//  let obj={} //  a=1 o=2 i=2

//  for(let i=0;i<nm.length;i++){
//      console.log(nm[i])
//      if(nm[i]=='a'||nm[i]=='e'||nm[i]=='i'||nm[i]=='o'||nm[i]=='u'){
//          if(obj[nm[i]]){
//              obj[nm[i]]=obj[nm[i]]+1
//          }
//          else{
//              obj[nm[i]]=1
//          }

//      }
//  }
//  console.log(obj)


let p="4a3b2c1d"
let letter=""  //aaaabbbccd
 
// for(let i=0;i<p.length;i++){
//     if(Number(p[i])){
//       //  console.log(p[i+1].repeat(Number(p[i])))
//         for(let j=0;j<Number(p[i]);j++)
//         letter=letter+p[i+1]
//     }
// }
// console.log(letter)

//or

for(let i=0;i<p.length;i++){
    if(Number(p[i])){
        letter=letter+p[i+1].repeat(Number(p[i]))
    }
}
console.log(letter)

let arr1=["apple","banana","chiku","water"]
let use="water"
//let aa1=false

let newfru=arr1.map((el)=>{

    if(arr1.includes(use)){
       // aa1=true
        // console.log("fru is there")
        return true
    }
    else{
        //aa1=false
       // console.log('fru is missing')
    }
})
if(newfru){
    console.log('fru is there')
}
else{
    console.log('fru is missing')
}

let myname="    my name        is Gajanan"
//output expected-="My name is Gajanan"