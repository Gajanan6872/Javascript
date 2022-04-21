let students=[
    {
        fullname:"gaja wali",
        rolnumber:10,
        skills:["python","sql"],
        marks:[80,89,90,92],
        city:'pune',
        isadult:true,
        birthyear:2012
    },

    {
        fullname:"naveen ",
        rolnumber:21,
        skills:["python","sql","java"],
        marks:[90,91,95,92],
        city:'banglore',
        isadult:false,
        birthyear:1990

    },

    {
        fullname:"gajesh ",
        rolnumber:25,
        skills:["python","sql","java","html"],
        marks:[85,87,98,90],
        city:'mumbai',
        isadult:true,
        birthyear:1999
    },
    {
        fullname:"nagesh ",
        rolnumber:34,
        skills:["python","sql","java","html","c#"],
        marks:[92,93,94,95],
        city:'pune',
        isadult:true,
        birthyear:1991
    },
    
]

// people belong to pune city

//console.log('filtered oject')

//case 1

// let rr=students.filter(function(el){
//     return el.city==="pune"
// })
// rr.forEach(function(el){
//     console.log(el.fullname)
// })

//case2
// students.filter(function(el){
//     return el.city=='pune'
// })
// .forEach(function(el){
//     console.log(el.fullname)
// })

//program 2 
//Name of those whose age is greater than 32

// students.filter(function(el){
//     return (2022 - el.birthyear)>30
// })
// .forEach(function(el){
//     console.log(el.fullname)
// })
// method2
//  let birthyear=students.map(function(el){
//     if((2022-el.birthyear)>30){
//         console.log(el.fullname)
//     }
// })
// console.log(birthyear)
// birthyear.filter(function(el){

// })
//program 3
//average marks of all the  students // dint get output

//console.log(`his is perticular student marks,${students[0][`fullname`]}`)
// let avgmarks=students.reduce(function(acc,el){
//     return acc +
//     el.marks.reduce(function(acc,el){
//         return acc +el
//     },0)
// },0)/students.length


//console.log(students['marks'])// wil not get op as it is in array
// let avg=students[0].marks.reduce(function(acc,el,index){
//          return acc +el
//      },0)
// console.log(avg)

//program 4
//avg age of all students
// let avgage=students.reduce(function(acc,el){
//     return acc+(2022-el.birthyear)
//     },0)/students.length
// console.log(avgage)

// program 5
//total number of skills with name  //no output
// gaja 2

// students.forEach(function(el){
//     console.log(`${el.fullname}:${el.skills.length}:${el.skills}`)
// })

//program 6
//people belong to pune city and includes python skill

//students.filter(function(el){
 //   return el.city === 'pune'&& el.skills.includes('python')
// }).forEach(function(el){
//     console.log(el.fullname)
// })

// let a=students.filter(function(el){
//       return el.city === 'pune'&& el.skills.includes('python')
//       })
//       console.log('this is the filtered array',a)
//       a.forEach(function(el){
//           console.log(el.fullname)
//       })

//program7

//same value for age and roll num  no output

// students.filter(function(el){
//     return 2022-el.birthyear===el.rolnumber

// })
// .forEach(function(el){
//     console.log(el.fullname)
   
// })

// //program 8
// // every person age is above 30
// let t=students.every(function(el){
//     return (2022-el.birthyear)>30

// })

 //t===true?console.log('everyone is above 20'):console.log('fail')