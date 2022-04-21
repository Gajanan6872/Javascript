let sentence= "My name is Gajanan. I a new to java and my full name is gajanan Wali"
let reg=/Gajanan/gi

// let aa=reg.exec(sentence)
// console.log(aa)                  // this will detect Gajanan at index 11

// let bb=reg.exec(sentence)
// console.log(bb)                 // this will detect gajanan at string 56
// let cc=reg.exec(sentence)
// console.log(cc)                // for this null we will get as there is no one more gajanan


// let result=reg.exec(sentence)
// while(result){
//     console.log(result)
//     result=reg.exec(sentence)
// }
// let ab=reg.test(sentence)
// console.log(ab)

//Strings ========================================> Search ,match ,replace

// search

let subject= "Marathi hindi kannada HINDI Hindi HIndi"
let reg1 = /hindi/gi

// let dd=subject.search(reg1)
// console.log(dd)                              // will search the index

// let ee=subject.match(reg1)
// console.log(ee)                            // will get the matching languages

// let ff=subject.replace(reg1,"marathi")
// console.log(ff)


//==========================================================================================>

let js= 'I am learning javascript. I like JAVASCRIPT'
let regexp= /javascript/gi

// let gg=regexp.exec(js)
// console.log(gg)

// let hh=regexp.test(js)
// console.log(hh)

// String search, match , replace

let ii=js.search(regexp)
console.log(ii)

let jj=js.match(regexp)
console.log(jj)
 let kk=js.replace(regexp,'java')
 console.log(kk)


 //=======================================================================>

 let abc='0123456789'
 let pattern=''
 for(let i=0;i<abc.length;i++){
 if(abc[i]!=5 && abc[i]!=0){

    pattern=pattern+String(10-Number(abc[i]))
    console.log(pattern)
 }
 else {
     val=Number(abc[i])===0?5:0
     pattern=pattern+val
    
    }

 }
 console.log(pattern)


 //===============>
//  let g="mcd*347y385835903585"
//  cy.get(path[d^='mcd*'])