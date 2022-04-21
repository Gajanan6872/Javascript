// let randomNumber=Math.floor(Math.random()*6)+1;
// console.log(`the random number is ${randomNumber}`);
// let userinput=prompt('enter the number');
// console.log(`the entered user input is ${userinput}`);

// if(randomNumber==userinput){
//     console.log('number is correct');
// }
// else{
//     console.log('number is incorrect');

// }

//By for loop

// let randomNumber2 = Math.floor(Math.random()*6)+1
// console.log(`the random number is ${randomNumber2}`);

// let userinput2; //undifined

// for(let i=0 ;i<3;i++){
//     userinput2=prompt('enter the num')
//  console.log(`the entered user input ${i+1} is ${userinput2}`);

//     if(randomNumber2==userinput2){
//         console.log('guess is correct')
//         break;
//     }
    

//  }

// //while loop
// let randomNumber3= Math.floor(Math.random()*6)+1
// console.log(randomNumber3)
//  console.log(`the random number is ${randomNumber3}`);
// let i =0;
// let userinput3; //undefined
// while(randomNumber3!=userinput3){
//     userinput3=prompt('enter the num')
//     i++;
//   console.log(`the entered user input ${i} is ${userinput3}`);
  


// }
// console.log('guess is correct')


//while other
// let randomNumber4= Math.floor(Math.random()*6)+1
// console.log(randomNumber4)
// let userinput4;

// while(true){
//     userinput4= prompt('enter the num')
//     if (userinput4 == randomNumber4){
//     console.log('guess is correct')
//     break
//     }
// }

// using flag

let randomNumber5= Math.floor(Math.random()*6)+1 //4
console.log(randomNumber5)
let userinput5= prompt('please guess the num') //4
let userguess=false;

if(randomNumber5==userinput5){
    userguess=true
}
else{
    userinput5=prompt('please guess num')
    if(randomNumber5==userinput5){
        userguess=true

    }
    if(userguess==true){
        console.log('guess is correct')

    }
    else{
        console.log('guess is incorrect')
    }

}
if (userguess){
    console.log(`this num is correct`)
}
else{
    console.log('number is not correct')
}
//another

// let randomNumber6= Math.floor(Math.random()*6)+1
// console.log(randomNumber6)
// let userinput6= prompt('please guess the num')

// if(randomNumber6==userinput6){
//     console.log('guess is correct')
// }
// else{
//     console.log('guess is incorrect')
//     userinput6=prompt('please guess the num')
//     if(randomNumber6=userinput6){
//         console.log('your guess is correct')

//     }
//     else{
//         console.log('guess is incorrect')
//     }
// }
 

// let aa=Math.max(3,5)
// console.log(aa)


// console.log(Math.random())
// console.log(Math.floor(4.6))
// console.log(Math.ceil(4.6))