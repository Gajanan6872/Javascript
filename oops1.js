// let data={
//     fullname:"Gajanan",
//     Lastname:"wali",
//     adharnum:142,
//     display:function(){
//         console.log(this.fullname)
//     }

// }
// data.display()   // will display the name 


// class person{
//     constructor(fn,ag,adhno){
//         this.fullname=fn
//         this.Lastname=ag
//         this.adharnum=adhno
//     }
//     display(){
//         console.log(this.fullname)
//     }
// }

// let gaja=new person("Bpn","Wa",12)
// console.log(gaja)


//function constructor

let person2=function(fn1,ln,ag,adhno){
    this.firstname=fn1
    this.Lastname=ln
    this.age=ag
    this.adhar=adhno
    this.display=function(){
        console.log(this.firstname,this.Lastname)  
    }
    this.display()
}


let girish=new person2('Girish','vitt',26,145)
//girish.display()
//console.log(girish)

let mahi=new person2('mahi','mahag',25,122)
//console.log(mahi)


// prototype
// Every object in JS has _proto_
//console.log(girish._proto_===person2.prototype)

let myobj={}
 
myobj['a']

