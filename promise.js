
// Execution of code from asynchronus to synchronous is called as promises

//synchronus 
// The code will be exceuted in a order one by one

// Asynchronous
// the code will execute at a time

//Syn
// function add(){

//     console.log(4+4)

// }
// function add1(){
//     console.log(5+4)
// }
// add1()
// add()

//Async
// function add2(){
//     setTimeout(() => {
//         console.log(4+6)
//     }, 2000);
// }
// function add3(){
//     console.log(5+4)
// }
// add2()
// add3()

//To convert from asyn to syn

function add4(){
    setTimeout(() => {
        console.log('hi')
    }, 2000);
    setTimeout(() => {
        console.log('hello')
    }, 1000);
    setTimeout(() => {
        console.log('bye')
    }, 3000);

}
add4()

//converting into syn


function add4(){
    setTimeout(() => {
        console.log('hi')
        setTimeout(() => {
            console.log('hello')
            setTimeout(() => {
                console.log('bye')
            }, 3000);
        }, 2000);
   
    }, 1000);
    
}
add4()



// Pending - Initial state of promise. This state represents that the promise has neither been fulfilled nor been rejected, it is in the pending state.
// Fulfilled - This state represents that the promise has been fulfilled, meaning the async operation is completed.
// Rejected - This state represents that the promise has been rejected for some reason, meaning the async operation has failed.
// Settled - This state represents that the promise has been either rejected or fulf

// . then ( ) is used after promise is fulsilled ,catch() to check the error


//Classes in JS
//They provide a new way of declaring constructor functions in javascript.


//Temporal Dead Zone is a behaviour that occurs with variables declared using let and const keywords.
//It is a behaviour where we try to access a variable before it is initialized.



//Object destructuring is a new way to extract elements from an object or an array.
//const classStrength = classDetails.strength;


// generator funtion
//They can be stopped midway and then continue from where it had stopp