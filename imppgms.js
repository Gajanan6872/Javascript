
// to count the vowels
a= 'I am good boy but '
let count=0;

for(let i=0;i<a.length;i++){
   if(a[i]=='a'||a[i]=='e'||a[i]=='i'||a[i]=='o'||a[i]=='u'){
       count=count+1
   }

}
console.log(count)

// To find the aqaureroot
let number=9
// let const=prompt('enter the number:')
console.log(Math.sqrt(number))


// To find the area of triangle
let base=4
let height =3

let area =(base*height)/2;
console.log(area)


//To swap two variables

let a1='Gajanan'
let b1='Wali'

let temp;

temp=a1
a1=b1
b1=temp
console.log(a1)
console.log(b1)

//To generate a random number
// to generate num btwn 1-10   
console.log(Math.random())

//let a3=Math.random()//*(highest numb-lowest numb)+lw num
// Math.floor is used to convet into int

let a2=Math.random()*(10-1)+1
console.log(Math.floor(a2))

// To check num is pos or negative or zero
// we can use 2 times else as well

let num3=-4

if(num3>0){
    console.log('the entered num is pos')
}
else if(num3=0){
    console.log('the entered num is zero')

}
else{
    console.log('the entered num is negative')
   
}


//============= to check num is evn or odd

let b=3
let c =[2,5,-6,4,-8]
let d=[] 
let e=[]

// if(b%2==0){
//     console.log('num is odd')
// }
// else {
//     console.log('num is neg')
// }

// for(let i=0;i<c.length;i++){
//     if(c[i]>0){
//          d.push(c[i])
//     }
//     else{
//         e.push(c[i])
        
//     }
// }
// console.log(d)
// console.log(e)

let newarray= c.map(function(el){
  if(el>0){
      d.push(el)
  }
else{
      e.push(el)
  }
console.log(d)
console.log(e)
})


//====================TO find the largest among the num

let lar=[24,27,87,56,90]

//max =  Math.max(num[i],num[i+1])
// let largest=lar.reduce(function(ac,el,index){

//     return Math.max(ac,el)
// //   if(el>ac){
// //       return el
// //   }
// //   else{
// //       return ac
// //   }

//  },0)
// console.log(largest)


//==========================To find the factorial of num

let number4=3

    if(number4<0){
        console.log('fact of -ve num doesnot exists')
    }
    else if(number4=0){
        console.log('the fact of 0 is 1')
    }
    else{
        let fact=1
       for(let i=1;i<=number4;i++){
          fact=fact*i
    }
    console.log(fact)

    }

// prie num btwn 2 interval, fibnochi seq ,to check armstrong num , lcm ,decimal to binary


//=========================to check string is palindrom

// let string= 'Gajanan'

// let normal=string.split('')
// console.log(normal)

// let rev=normal.reverse()
// console.log(rev)

// let rejoin=rev.join('')
// console.log(rejoin)

// if(string==rejoin){
//     console.log('the string is palindrom')
// }
// else{
//     console.log('the string is not palindrom')

// }


// TO find the avergage of the numbers

let avg=[10,20,30,40,50]
let average=0;

for (let i=0;i<avg.length;i++){
    average+=avg[i]
}
let num5=average/avg.length
console.log(num5)


//============================> to check palindrom another method
// let string1=" Gajanan"
// let new1=''
// for(let i=0;i<string1.length;i++){
//     new1=string1[i]+new1
// }
// console.log(new1)
// if(string1==new1){
//     console.log('palindrome')
// }
// else{
//     console.log('not palindrom')
// }

//===================================> to make it reverse
let string2="My name is Gajanan"  //ym eman si nanajag
let spl=string2.split('').reverse().join('')
console.log(spl)
// let rev1=spl.reverse()
// console.log(rev1)
// let joi=rev1.join('')
// console.log(joi)
