//Map() , set()
// syntax

// let mapA=new Map()
// console.log(mapA)         // shows empty {}

// console.log(mapA.size)  // size is zero

// //Method
// //syntax mapA.set('key','value')
// mapA.set('question','answer')
// console.log(mapA)                    // question=> true

// // True as key
// mapA.set(true,'minister')
// console.log(mapA)                   // mapA=>minister

// // Num as key
// mapA.set(10,'is even')

// //array as key
// let arr=["gajanan","wali"]
// mapA.set(arr,'fullname')
// console.log(mapA)

// //object as key
// let family={mother:'suma',father:'nija'}
// mapA.set(family,"parents")
// console.log(mapA)

// //===================>
// // to get the key using get method

// console.log(mapA.get(true))          //=> minister
// console.log(mapA.get(10))            //=>even
// console.log(mapA.get(arr))
// console.log(mapA.get(family))        //=> parents
 
// // ===> using clear
// //mapA.clear()                    // it will clear all and give empty array
// console.log(mapA)

// // using has                        It will give true
// let aa=mapA.has(arr)
// console.log(aa)

// console.log(mapA.keys())            // it will just give the keys from left side
// console.log(mapA.values())           // it will give everything from right side
// console.log(mapA.entries())          // it will give all the entries whole key and value


//=======================> Set(), get(),clear(), delete(),keys(),values(),entries()

// example 
// let mapB= new Map([
//     ["question","answer"],
//     ["What is the capital of maharastra","mumbai"],
//     ["What is the capital of Goa","panaji"],
//     ["What is the capital of karnataka","banglore"],
//     ["What is the capital of tamilnadu","chennai"],

// ])

// console.log(mapB)

// let correctAnswer=0
// for(let [key,value] of mapB){
//     if(key!='question'){
//     let usernames=prompt(key)
//     if(usernames===value){
//         correctAnswer+=1
//     }
//     }
// }

// if(correctAnswer==4){
//     console.log('gold medal')
// }
// else if(correctAnswer==3){
//     console.log('silver medal')

// }
// else if(correctAnswer==2){
//     console.log('bronze medal')

// }
// else{
//     console.log('no medal')
// }

// * Set* //

let array=[12,13,20,50,60,60,60]
console.log(array)

setAC=new Set(array)          // it will give single values , wil not repeat the values
console.log(setAC)

let setA=new Set([24,25,23,56,56,44])
console.log(setA)

// TO clear()
//let ab=setA.clear()           // it will clear all the values
//console.log(setA)

// to add()
// console.log(setA.add(20))
// console.log(setA.keys())

// for(let a of setA.keys()){              // it will give all single vales not in array
//     console.log(a)
// }

for(let[a,b] of setA.entries()){           // same will repeat on both left and right side
    console.log(a,b)
}

let setC=new Set([["MH","MUMBAI"],["UP","LUCKNOW"],["BL","BANGLORE"]])

for(let [a,b] of setC.entries()){                  // didnt get
    console.log(a[0],b[1])
    console.log(a,b)

}


let setD= new Set([[2,3],[5,6],[3,4]])

for(let [key,value] of setD.entries()){
    console.log(key,value)
    console.log(key[0],value[1])

}


