//Object -- ._prototype_ ===person.prototype



// let Gaja={
//     fullname:'Gajanan',
//     age:25
// }

// let person=function(fullName,age){
//     this.fullName=fullName
//     this.age=age
// }
//console.log(new person("gajanan",24))

let person=function(fullName,age){
    this.fullName=fullName
    this.age=age
    // this.diplay=function(){
    //     console.log(this.fullName)
    // }
 }
//person.diplay()

//inorder to remove it from we create it outside by using prototype
person.prototype.display=function(){
    console.log(this.fullName)
}

let Gaja=new person('Gajanan Wali',25)
console.log(Gaja)

let giri=new person('Girish',24)
console.log(giri)

//---------------------------->
// To check the instance of

console.log(Gaja instanceof person)                 // true 
console.log(person.prototype===Gaja._proto_)        // false


// If we want to add the property

person.prototype.language='hindi'
console.log(Gaja.language)

let person2=function(fn,age){
    this.fullName=fn
    this.age=age
}
 
navi= new person2('naman',10)
console.log(navi)


// It will change the values
if(navi instanceof person2){
    navi.fullName='Navin'
    navi.age=12
}
console.log(navi)

// To check the property using hasownproperty

console.log(Gaja.hasOwnProperty('language'));   // getting false

console.log(person.hasOwnProperty('language'));   // false



// Similary with the Array
let names=['abhi','ram','giri','ravi']

console.log(names)
console.log(names instanceof Array)    // True

console.log(names._proto_===Array.prototype)     // False

names.push('gaja')
console.log(names)

//===>object----->._proto_ ==>function

Array.prototype.duplicate=function(arr){
    return Array.from(new Set(arr))
}

console.log(names.duplicate(names))
console.log(names)


console.log(new Set([2,3,4,5,5,6]))
console.log(Array.from(new Set([2,3,4,4,4,5,6,])))


//gaja
// {
//     a:10           // we can also write in this manner
//     b:20
// }
