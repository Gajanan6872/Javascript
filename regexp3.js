let reg1=/abc/ig
let a="my name is ABC"
 console.log(reg1.test(a))

 let reg2=/[abc][xyz][gaj]/
 let b='bya'
 console.log(reg2.test(b))

 let reg3=/[ABC][CDE][DEF]/
 let c='hjveyvfAEF'              // here chech the last 3 letters which are included in reg3
 console.log(reg3.test(c))

 let reg4=/[A-Z][0-9][0-9]/
 let d='i am from a24'     //false
 let d1='i am from A24'   //true
console.log(reg4.test(d))
console.log(reg4.test(d1))

let reg5=/[0-9abc][a][A-Za-z]/g
let e='Hello 1Am new to aZ'
console.log(reg5.test(e))

let reg6=/[^a-z][a-z][0-9]/  //----------------------------------
let f="i a1 solved v8"    // before a1 there is space so it will consider tht
console.log(f.match(reg6))

let reg7=/^[a-z][xyz]/    // starts with 
let g="my name is abc"
console.log(reg7.test(g))

let reg8=/[a-z][a-z]$/
let h='aK'
let h1='ak'  // ends with
console.log(reg8.test(h))
console.log(reg8.test(h1))

let reg9=/s*t/  // st t sst ssst   // true
let reg10=/sa*t/  // st sat saat saaat // false
let i='salt'  

console.log(reg9.test(i))
console.log(reg10.test(i))

let reg11=/tre*/g  // true  // tr treee tree
let j='trees'
console.log(reg11.test(j))


let str='honestly'
let reg12=/hon*tly/g   // hotly  hontlt honntly   // false
let reg13 =/h*nestly/g  // nestly hnestly hhhhnestly  // true

console.log(reg12.test(str))
console.log(reg13.test(str))











 


