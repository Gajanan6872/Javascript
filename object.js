// object literal
//JavaScript objects can have properties, which define their characteristics
//object is a standalone entity, with properties and type.

//let person =["gaja","wali",25,102]

// let person ={

//     firstname:'gaja',
//     lastname: 'wali',
//     age:       25,
//     idnum:     102

// }

//Retrieve
//let first = person.firstname 
//let first= person['firstname']
//console.log(first)

//add
// person.city='belagavi'  // person['city']= 'belagavi
// console.log(person)

// //update
// person.lastname='waali' // person['lastname']= 'waali'
// console.log(person)

// // delete

// delete person.city
// console.log(person)

//obect example

// let person ={

//     firstname:'gaja',
//     lastname: 'wali',
//     age:       25,
//     idnum:     102

// }
// console.log(person.age) 
//  console.log(person['idnum'])

 //loop===================================>

 // dot notation doesnot work inside the loop
  //syntax for (let key in students){
     // console.log(key.student[key])
  
     let person =[
    {
        firstname:'gaja',
        lastname: 'wali',
        age:       25,
       skills:["java","python"]

     },
    {
        firstname:'giri',
        lastname: 'vitt',
        age:       28,
        skills:["java","python","css","html"]
    },
    {
        firstname:'mahi',
        lastname: 'mahag',
        age:       26,
      skills:["java","python","css"]
     
    }
     ]
    //   console.log("========This is the object loop==========")
    //  for (let i=0;i< person.length;i++){
    //    let obj= person[i]
    //    for(let key in obj){
    //        console.log(key,obj[key].firstname)
    //    }
    // }

    //object.entries
// person.map(function(el){
//     for (const [key, value] of Object.entries(el)) {
//         console.log(`${key}: ${value}`);
//       }
// })


//  let avgage=person.reduce(function(acc,el){
//      return acc+el.age
//  },0)
//  let avg=avgage/person.length;
//  console.log(avg)

//  let arr=person.map(function(el,index){
//      el['language']='english'
//  })
//  console.log(person)
 
 person.map(function(el,index){
      el["skills"].push('c++')
     })
     console.log(person)
     //console.log(add) //we shd use let add nly if r returning it. else no need


// loop through object
let data= {
    firstname:'mahi',
    lastname: 'mahag',
    age:       26,
  skills:["java","python","css"]
 
}

// for(let key in data){
//     console.log(key,data[key])
// }

// for (let [key, value] of Object.entries(data)) {
//     console.log(`${key}: ${value}`);
//   }