let cities=['pune','nagpur','delhi','ugar']
// let a=cities.filter(function(el){
//     return el.length==6
// })
// console.log(a)

//Or
// for(let i=0;i<cities.length;i++){
//   //  console.log(cities[i])
//   if(cities[i].length==6){
//   console.log(cities[i])
//   }
// }

// To count capital letter
let namea="I am new to JavaScript "
let count=0;


for(let i=0;i<namea.length;i++){
    if(namea[i]>="a"&& namea[i]<="z"){
        count=count+1
    }
}
console.log('The small letters counts are', count)

//or
// for(let i=0;i<namea.length;i++){
//     //console.log(namea[i])
//     if(namea.charCodeAt(i)>=65&&namea.charCodeAt(i)<=90){
//         count=count+1
//     }
// }
// console.log(count)

//=================================================================>

// let a="Gaja"
// let b=10
// let c=20
// console.log(a+b+c)

// console.log(b+c+a)

//number+number===>number
//number+string ===> string
//string+string ===> string
//string+number==> string

let abc="Gajanan belongs to ugar and lives in ugar"

 let bb=abc.replaceAll('ugar','belgaum')
 console.log('this is the new replaced city',bb)
 let bb1=abc.replace('ugar','belgaum')
 console.log('this is the new replaced city',bb1)

 
 function replaceAll(sentence,word,replyw){
    let arrayOne=sentence.split(' ')
    console.log(arrayOne)
    let jk=arrayOne.map(function(el){
        if(el==word){
            return el=replyw
        }
        else{
            return el
        }
    })
    //console.log(jk)
    console.log(jk.join(' '))
}
replaceAll(abc,"ugar","belagavi")


//===========================>
//First letters of sentence in uppercase

let namee="I am new to JavaScript"
let ac=namee.split(" ") // ["I", "am","new",]
console.log('the new array',ac)

let upper=ac.map((el,index)=>{
     return el.charAt(0).toUpperCase()+el.slice(1,el.length) //substr(1,el.length)

})
console.log(upper.join(" "))
console.log(`this is upper case ${upper.join(" ")}`)
 

let data="My name is Gaja"
// let ab=data.split('')


function reverseStr(str){
    // for(i=0;i<ab.length;i++){
    //     rev=ab[i]+rev
    // }
   return str.split('').reverse().join('')


}
let rev=reverseStr("My name is Gaja")
console.log(rev)


let data1="sunday is funday"
let rev1=''
for(i=0;i<data1.length;i++){
        rev1=data1[i]+rev1
     }
     console.log(rev1)
console.log(rev1.split(' ').reverse().join(' '))

//=================================> To empty an array
const array = [1, 2 ,3];
console.log(array);

// call the function
const result = emptyArray(array);
console.log(result);
//or
// program to append an object to an array

function emptyArray(arr) {
 // substituting new array
    arr.splice(0, arr.length);
    
    return arr;
}

//============================> To remove spaces from string

let senta="    I am new to JA   "
console.log(senta.split("").join(''))
