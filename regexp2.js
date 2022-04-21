let k='i am learning javascript Javascript jaVaScript'
// console.log(typeof k)
//  let reg=/java/gi

//  let a=reg.exec(k)
//  console.log(a)   // if we user multiple time this we will get undefined

 //Test()

//  if(reg.test(k)){
//      console.log('pass')
//  }
//  else{
//      console.log('fail')
//  }

//string ================>

let h='i am am new to javascript AM good with login'

// let reg1=/am/gi

// let b=h.search(reg1)
// console.log(b)

// let c=h.match(reg1)
// console.log(c)

// let d=h.replace(reg1,'sm')
// console.log(d)

//=============================================>
//Meta characters

let aa="dog is always a good friend"
reg2=/^dog/gi
reg3=/en$/gi

//  if(reg2.test(aa)){
//      console.log('pass')
//  }
//  else{
//      console.log('fail')
//  }

//  if(reg3.test(aa)){
//     console.log('pass')
// }
// else{
//     console.log('fail')
// }

// let animal="goat"
// let reg4=/.at/gi

// if(reg4.test(animal)){
//     console.log('pass')
// }
// else{
//     console.log('fail')
// }

let veg='tomato'
let reg5=/mto*/   // zero or any num of char at after to


if(reg5.test(veg)){
    console.log('pass')
}
else{
    console.log('fail')
}


// let fruit='apple'
// let reg6=/ap?p?le/

// if(reg6.test(fruit)){
//     console.log('pass')
// }
// else{
//     console.log('fail')
// }
// console.log(reg6.test(fruit))


// Groups

// let n='mabt'
// let reg7=/m[ab][ab]t/
// console.log(reg7.test(n))

// let p='mr5t'
// //p='maRt'  it will become false
// let reg8=/m[a-z][0-9]/
// console.log(reg8.test(p))

// let l='mrkt'
// let reg9=/m[a-z][0-9abc]t/
// console.log(reg9.test(l))


let fru='coconut'
console.log(/con/.test(fru))