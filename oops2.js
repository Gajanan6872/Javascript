// Using funtion constructor

let Person=function(firstname,age,rollnum){
    this.firstname=firstname
    this.age=age
    this.rollnum=rollnum
//     this.display=function(){
//         console.log(this.age)
//     }
}
let data=new Person("Gajanan",24,234)


console.log(data)

// Person.prototype.display=function(){
//     console.log(this.age)
// }
// data.display()

console.log(data.__proto__===Person.prototype)

console.log(data.hasOwnProperty('age'))  //True
console.log(data.hasOwnProperty('sub'))  //False


// Using  class constructor

class person2 {

    constructor(fname,lname){
        this.firstname=fname
        this.lastname=lname
    }
    display(){
        console.log(this.lastname)
    }
}
 
let data1=new person2('Gajanan','wali')

console.log(data1)
data1.display()

console.log(data1 instanceof person2) //true


// program 3 object type

let obj={
    display:function(){
        console.log('Namaste')
    }
}

let data2=Object.create(obj)
console.log(data2)          

data2.firstname="Gaja"
data2.age='25'

console.log(data2)
data2.display()

// Program on inheritence

class student1{
  fullname="Girish"
  age=25
  rollnum=890
}
class teacher extends student1{
    salary=5000
}
class professor extends teacher{
    spec="science"
}

let data3=new professor()
console.log(data3)

console.log(data3.age)
console.log(data3.spec)


// Same using contructure

class student2{
    constructor(fullname,age,roll){
        this.fullname=fullname
        this.age=age
        this.rollnum=roll
    }
}
class teacher1 extends student2{
    constructor(fullname,age,roll,sal){
        super(fullname,age,roll)
        this.salary=sal
    }
}
class professor1 extends teacher1{
    constructor(fullname,age,roll,sal,spec){
        super(fullname,age,roll,sal)
        this.specialisation=spec
    }
}

let info=new professor1("chand",40,89,4000,"commerce")
console.log(info)

let info1=new teacher('pan',35,12,2000)
console.log(info1)

// TO display Gfather, father ,son names

class grandfather{
    constructor(firstname,lastname){
        this.firstname=firstname
        this.lastname=lastname
    }
    display(){
        console.log(this.firstname,this.lastname)
    }
}
class father extends grandfather{
    constructor(grafname,lastname,fatfname){
        super(grafname,lastname)
        this.fatfname=fatfname
    }
    display(){
        console.log(this.fatfname,this.lastname)
        super.display()
    }
}
class son extends father{
    constructor(grafname,lastname,fatfname,sname){
        super(grafname,lastname,fatfname)
        this.sname=sname

}
display(){
    console.log(this.sname,this.lastname)
    super.display()
}
}

let names= new son('ram','patil','sham','bham')
console.log(names)
names.display()

// If display is user it will override and will display the last class 
// we can user super here to 