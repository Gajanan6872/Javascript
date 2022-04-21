//synchronous
// function add(x,y){
//    console.log(x+y)
// }
// function add1(x,y){
//     console.log(x+y)
// }
// add1(10,12)  // first this will run
// add(10,11)

//Asynchronous

// function add(x,y){
//    setTimeout(() => {
//      console.log(x+y)

//    }, 2000);
//  }
//  function add1(x,y){
//      console.log(x+y)
//  }
//  add(10,11)
//  add1(10,12)  // first this will run

// Callback hell



// function add(x, y) {
//     setTimeout(() => {
//         console.log('hi')
//         setTimeout(() => {
//             console.log('hey')
//             setTimeout(() => {
//                 console.log('bye')
//             }, 2000);

//         }, 1000);

//     }, 3000);
// }
// add()

//Callback hell
//Promise will have 3 - pending , reject,resolve

// let pro=new
// Promise(function(resolve,reject){
//     let x=5
//     let y=5
//     if(x==y){
//         resolve('hello it is equal')
//   }
//   else{
//       reject('hello it is not equal')
//   }
// })
// pro.then(function(msg){
//     console.log(msg)},function(msg){
//         console.log(msg)
//     })

// let promise2=new Promise(function(resolve,reject){
//     let names=['gaja','maja','sija']
//     if(names.length==2){
//         resolve(names)
//     }
//     else{
//         reject(names.pop())
//     }
// })
// promise2.then(function(a){
//     console.log(a)
//    },function(b){
//         console.log(b)
//     })


  let pro2=new Promise(function(resolve,reject){
      if(10==10){
          resolve('hello')
      }
      else{
          reject('bye')
      }
  })  

   pro2.then(function(msg){
      console.log(msg)
      return msg[0]
      })
      .then(function(msg){
          console.log(msg)
          return 2
      })
      .then(function(msg){
        console.log(msg)
      })
      .catch(function(msg){
          console.log(msg)
      })
  











