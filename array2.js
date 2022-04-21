// array stores value by index
// let numbers=[22,33,44,55]

// console.log(numbers[1])

// map(), filter(), reduce(), forEach(), some(), every(), find(), findex()

//fill some every

//push example=============================>

// let birthYear=[2000,1999,1998,1989]
// let calAge=[]

// for (let i=0;i<birthYear.length;i++){
//    // console.log(2022-birthYear[i])
//    //let age=2022-birthYear[i]
//    //console.log(age)
//   // calAge.push(age)
//   //calAge.push(birthYear[i])

// }
// console.log(calAge)



// 1.Map====================================>
// method=map()
// action=works with every element of Array
// return = new Array
// el- current element , 
// index= index ,rr-[]

//  let birthYear=[2000,1999,1998,1989]

// let aa=birthYear.map(function(el,index,arr){    // let aa=birthYear.Map((el,index)=>{)}

//     //console.log(el,index,arr)
//     return 2022-el;
// })
// console.log(aa)

// let cc=[11,22,33,44]
// //let add=[]
// let num =cc.map(function(el){
//     return el+2;
// })
// console.log(num)

// let abc=[2,3,4]
// let bcd=[3,4,5]

// let agg=abc.map(function(el,index,arr){
//     return el*bcd[index]
// })
// console.log(agg)

// let num=[11,22,33,11,44]
// let num1=[]
// let resultarray= num.map((el,index)=>{
//     if(!num1.includes(el)){
//         num1.push(el)

//     }
// })
// console.log("this is the reuslt of unique array",num1)
//2. filter   ====================================>

// let fewAge =[35,55,67,87]
// let above =[]

// for (let i=0;i<fewAge.length;i++){
//         //console.log(fewAge[i]>60);
//         if(fewAge[i]>60){
//         above.push(fewAge[i])
//     }
// }
// console.log(above)

// method =Filter
// filter -fiter out Elements based on Condn
// return -Array

// let bb=fewAge.filter(function(el,index,arr){
 
//     return el>60
// })
// console.log(bb)

// reduce array---------------------------------------->>>>

// method = foreach
// works with every element f Array
// return single

// let marks=[11,22,33]
// let sum=0

// for(i=0;i<marks.length;i++){
//     sum=sum+marks[i];
// }
// console.log(sum)

// let ee=marks.reduce(function(acc,el,index,arr){
//     return acc+el
// },0)
//     console.log(ee)

//another example on reduce
num= [50,60,70,94,55]
// let m=num.reduce(function(acc,el){
//  // if (el>acc) return el;return acc;
//  return Math.max(acc,el)  //similarly we can do fr min

// })
// console.log(m)
let max=0;
for(let i=0;i< num.length;i++){
    max =  Math.max(num[i],num[i+1])
}
console.log(max)
console.log(Math.max(...num))
   // 4.foreach()=====================================>

//    method=foreach()
//    works with every element of Array
//    returns nothing
//    let names=["gaja","giri","Mahi"]

// for (let i=0;i<names.length;i++){
//     console.log("welcome" + names[i])

// }

// names.forEach(function(el,index,arr){
//     console.log("welcome"+el)

// })

//splice operation

//Splice( index,add or remove , names )
//          0       1     2      3
// let names=['gaja','giri','mahi','basu']
// //removed one element from index 2 ie mahi
// let remove = names.splice(2,1)
// console.log(remove)
// console.log(names)
// // removes 1 element from positon 1
// let remove1=names.splice(1,1)
// console.log(remove1)

// removes none  frm index 2 and adds suhas at index 2
// names.splice(2,0,'suhas')
// console.log(names)

//removes 2 ele after index 1 and adds 2 ele
// names.splice(2,2,'akash','nikil')
// console.log(names)




