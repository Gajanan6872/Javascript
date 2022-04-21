let add = function (x , y){
    console.log(x+y)
    console.log(x-y)
    console.log(x/y)
    console.log(x*y)
}
add(20,10)

//function without parameter without return type

function mul(){
    console.log(2*4)
}
mul()

// function declaration   with parameter

// console.log('hello')

 function add1(a,b){
     console.log(a+b);

 }
 add1(10,20)

 //arrow function===================>
let calc= (i,j)=>{
    console.log(i+j)

}
calc(12,14)

// with parameter without return type

let sub=(d,e)=>{
    console.log(d-e)
}
 sub(7,8)

 //or
 function sub1(a,b){
     console.log(a-b)

 } 
 sub1(10,5)

 //with parameter with return

 function div(a,b){
     return a/b;
 }
 let ab=div(10,5)
 console.log(ab)

 let div1=function(a,b){
     return a/b;

 }
 let ac=div1(50,5)
 console.log(ac)

 let div2= (a,b)=>{
     return a/b;
    
 }
 let aa=div2(21,7)
 console.log(aa)

 let div3=(a,b)=> a/b
 let dd=div3(30,5)
 console.log(dd)