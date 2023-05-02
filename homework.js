//1. Declare 2 variables a and b, such that a > b, and define values for them.
//1. sum; 2.difference (between a and b); 3.product; 4. quotient (between a and b); 5. remainder (between a and b)

const a = 25;
const b = 5;
console.log (a+b);
console.log (a-b);
console.log (a*b);
console.log (a/b);
console.log (a%b);

//2. Print your name and age in the following format: "My name is ____, I am ____"

let myName = prompt ('Your name?');
let myAge = prompt ('Your age?');
console.log (`My name is ${myName}, I am ${myAge}`);

//3. Declare a variable with defined value. Print the last digit of the number.

const x = 506;
console.log (x % 10);

const y = 4678;
console.log (x % 10);

//4. Check whether a given number is negative. Print “yes”, if it is negative, print “no” otherwise.

let x = -55
if(x >= 0) {
    console.log ("no")
} else {
    console.log ("yes")
};

let x = 55
if(x >= 0) {
    console.log ("no")
} else {
    console.log ("yes")
};

let x = 0
if(x >= 0) {
    console.log ("no")
} else {
    console.log ("yes")
};

//5. For a given three digit number calculate the sum of its digits.

let myValue = 987;
let a = ( myValue % 10 );
let b = ( myValue - a );
let c = ( b / 10 );
let d = ( c % 10 );
let e = ( c - d );
let f = ( e / 10 );
console.log ( a + d + f );