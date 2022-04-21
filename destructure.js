let array=[11,12,13,14,15]
//we will need to write as 
//console.log(array[3]) //or let a=array[0]
//                          console.log(a)
 
// so we write in destrucutred manner

//let []=array  this syntax

// let [a1,b1,c1,d1,e1]=array
// console.log(a1)
// console.log(e1)

let array2=[[21,22,23],[24,25],[26,27]]

// console.log(array2[2])

// //all in single array using flat
// let array3=array2.flat()
// console.log(array3)

//using concat  Combines two or more arrays. 
//This method returns a new array without modifying any existing arrays.
// let array4=array2.reduce((acc,el)=>{
//     return acc.concat(el) // [21,22,23].concat()

// },[])
// console.log(array4)


//Object
//let person=["'gaja",'wali',25,102]
// let person2={
//      firstname:'gaja',
//      lastname: 'wali',
//      age:       25,
//      rollnum:  102

// }

// console.log(person2.firstname)
// //or
// let fir=person2.firstname
// console.log(fir)

//syntax   let {}=person2
// let {firstname,lastname,age,rollnum}= person2

// console.log(firstname)
// console.log(age)
 
// or we can write as 
// let {firstname:ab,lastname:bc,age:cd,rollnum:de}= person2
// console.log(ab)
// console.log(de)


// examples

// let stud={
//     fullname:'Gajanan Wali',
//     age: 25,
//     skills:['java','c++']

// }

// let {fullname:xa,age,skills:[xc,xd]}=stud

// console.log(xc)
// console.log(age)

// let stud={
//         fullname:'rahul chati',
//         age: 25,
//        skills:['java','c++'],
//        parents:{ 
//            father : 'rakesh',
//            mother : 'vidya'
//        }
// }

// let {fullname,age:kk,skills:[sone,stwo],parents:{father:kl,mother}}=stud
//  console.log(fullname)
//  console.log(kl)
//  console.log(mother)
//  console.log(stwo)
//  console.log(age)// we will get this as wrong

//  let studs1=[
//      {father:'ram',mother:'kanchana'},
//      {father1:'shyam',mother1:'mina'},
//      {father2:'bham',mother2:'rina'},
    
    
// ]
// let [{father:ac,mother},{father1,mother1},{father2,mother2}]=studs1

// console.log(ac)
// console.log(mother)
// console.log(mother2)

// let studs1=[
//     {father:'ram',mother:'kanchana'},
//     {father:'shyam',mother:'mina'},
//     {father:'bham',mother:'rina'},
   
   
// ]
//  let [{father:c1,mother:c2},{father:c3,mother:c4},{father:c5,mother:c6}]=studs1
// // console.log(c1)
// // console.log(c4)
// // let[{a,d},{b,e},{c,f}]=studs1 y not getting o/p
// console.log(c3)

//Got all the outputs