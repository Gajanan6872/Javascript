// ======>To check prime or not

let num=5;
let isPrime=true;
if(num==1){
    console.log('The entered num is neither prime nor composite num')

}
else if(num>1) {
    for(i=2;i<num;i++){
      if(num%2==0){
          isPrime = false;
          break;
      }

    }
    if(isPrime){
        console.log('Is prime num')
    }
    else{
        console.log('is not prime')
    }
}


//========================> To convert the first letter to upper case

str="gajanan"

let newstr=str.charAt(0).toUpperCase()+str.slice(1)
console.log(newstr)


//=======================> program to sort words in alphabetical order
str1="my name is Gajanan"
let aa=str1.split(' ')
console.log(aa)

let b=aa.sort()
console.log(b)
console.log(b.join(' '))

for(let ele of aa){
    console.log(ele)
}

// ======================>program to replace a character of a string

const string = 'Mr Red has a red house and a red car';

// replace the characters
const newText = string.replace('red', 'blue');

// display the result
console.log(newText);


// To count the vowels anther method
// program to count the number of vowels in a string

// defining vowels
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}

// program to check if a string starts with 'S' and ends with 'G'

function checkString(str) {

    // check if the string starts with S and ends with G
    if(str.startsWith('S') && str.endsWith('G')) {
        console.log('The string starts with S and ends with G');
    }
    else if(str.startsWith('S')) {
        console.log('The string starts with S but does not end with G');
    }
     else if(str.endsWith('G')) {
        console.log('The string starts does not with S but end with G');
    }
    else {
        console.log('The string does not start with S and does not end with G');
    }
}
checkString(string);
//str.startsWith('S') || str.startsWith('s') && str.endsWith('G') || str.endsWith('g');

// if( /^S/i.test(str) && /G$/i.test(str)) {


// program to merge property of two objects

// object 1
const person = {
    name: 'Jack',
    age:26
}

// object 2
const student = {
    gender: 'male'
}

// merge two objects
const newObj = Object.assign(person, student);

console.log(newObj);


//===================> program to check if a string contains a substring

// take input
const str = prompt('Enter a string:');
const checkString = prompt('Enter a string that you want to check:');

// check if string contains a substring
if(str.includes(checkString)) {
    console.log(`The string contains ${checkString}`);
} else {
    console.log(`The string does not contain ${checkString}`);
}

// js program to perform string comparison

const string1 = 'JavaScript Program';
const string2 = 'javascript program';

// =======================>compare both strings
const result = string1.toUpperCase() === string2.toUpperCase();

if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}
//========================> program to replace all instances of a character in a string

const string3 = 'Learning JavaScript Program';

const result1 = string.replace(/a/g, "A");

console.log(result)

// ====================================>program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
checkLeapYear(year)

// generating a random number
const a = Math.floor(Math.random() * (max - min + 1)) + min;

//avaScript Program to Compare Elements of Two Arrays