let names=["gajanan","girish","mayur","ashi","nanajag"]

let longest=names.reduce(function(acc,el){
    if(el.length>acc.length){
        return el
    }
    else{
        return acc
    }
},"")
console.log(longest)

// //if 2 num of same length
// let aaa=names.filter(function(el){
//     return el.length==longest.length
// })
// console.log(aaa)

// from string
// let k="i am new to javascript"
// let as=k.split(" ") // splits into array from wre thre is space
//  console.log(as)
// let word=as.reduce(function(acc,el){
//     if(acc.length>el.length){
//         return acc
//     }
//     else{
//         return el
//     }
// })
// console.log(word)
//numbers
// to find max num

// let numbers=[10,20,110,30,85,780]
// let max=numbers.reduce(function(acc,el){
//     if(el>acc){
//         return el
//     }
//     else{
//         return acc
//     }
// },numbers[0])
// console.log(max)
// to find min num just reverse sign


// 3 logical
// passing number as a parameter to another function
// function add(x,y){
//     //console.log(x+y)
//     return x+y
// }
// let aa=add(1,2)
// console.log(aa)

// //parameters but no arguments
//  function add1(x1,y1){
//      console.log(x1) //undefined
//      console.log(x1+y1)  //NAN  not a number
    
//  }
//  add1()

 // using passed arguments
//  function add2(x1=50,y1=40){
//      console.log(x1+y1)
//  }
//  add2(20,25)

 //passing string as parameter to function
//  let car="ford"
//  function greet(word){
//      console.log( 'welcome'+ word)
//  }
//  greet(car)

 // array as paramter to another function
//  let mx=[11,12,13,14]
//  function printarray(arr){
//      let sum=arr.reduce(function(acc,el){
//          return acc+el
//      },0)
//      console.log(sum)
//  }
// printarray(mx)

//another example
// let min=[11,12,13,144,42]
// function printarray([a,b,c]){  //declared as destructure
//     console.log(a+b+c)
// }
// printarray(min)

// object as paramter to another function
// let person={
//     fullname:'gajanan',
//     lastname:'wali'
// }
// function name(obje){                          // wt to do if we use red fun
//     for(let key in obje)
//     if(key=='fullname'){
//         console.log(key,obje[key])
//     }
// }
// name(person)

// another example
// let student={
//     firstname:'gaja',
//     lastname:'wali'
// }
// function fullname({firstname:fn,lastname}){
//     // y cant use for(let key in obj)
//     console.log(fn+lastname)
    
// }
// fullname(student)

// function fullname(obj){
//     // y cant use for(let key in obj)
//    // console.log(fn+lastname)
//    console.log(obj)
    
// }
// fullname(student)

// funtion as paramter to another function
