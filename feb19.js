// function add(x,y){
//     console.log(4+5)

// }
// add()

// function add(x,y){
//     console.log(x+y)
// }
// add(2,4)

let fname = "Gaja"
let lname = "wali"
//console.log('my firstname is '+fname+' and my last name is' +lname)
//
//console.log('my firstname is ${fname} and my last name is ${lname}')
//console.log('my first name is ${fname} and last name is ${lname}') //not getting o/p

//funtion declare

// function calage(birthyear){
//     return 2022 - birthyear
// }
// let age = calage(1990)
// console.log(age)

// fun exp

// let calage2 = function(birthyear){
//   return 2022 - birthyear
// }
// let age2 = calage2(1990)
// console.log(age2)

// fun arrow

// let calage3 = (birthyear)=> {
//     return 2022 - birthyear
// }
// let age3 = calage3(1990)
// console.log(age3)

//or
// let calage4 = (birthyear)=> 2022 - birthyear
// let age4 = calage4(1990)
// console.log(age4)

//Marks

// function calavg(a,b,c){
//     return (a+b+c)/3
// }
// let avggaja=calavg(2,3,4)

let calavg =(a,b,c)=> (a+b+c)/3

let avggaja =calavg(2,3,4)
let avggiri = calavg(3,4,5)
let avgmahi= calavg(4,5,6)

function topper(studentone,studenttwo,studentthree){
    if(studentone>studenttwo && studentone>studentthree)
    {
        console.log('student one is topper')
    }
    else if(studenttwo >studentthree)
    {
        console.log('student two is topper')
    }
    else
    {
       console.log('student three is topper')
    }
}
topper(avggaja,avggiri,avgmahi)
    
    
    