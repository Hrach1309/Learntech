// 1. Declare variable. Initialize it with the value, which shows temperature in degrees Celsius.
// Print its equivalent in degrees Fahrenheit. To convert temperatures in degrees Celsius to
// Fahrenheit use the following formula: °C * 1.8 +32 = °F .

let cTemp = 25;
let fTemp = cTemp * 1.8 + 32;
console.log (fTemp)

// 2. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

let num1 = 27;
let num2 = 9;
if (num1 % num2 === 0 || num2 % num1 === 0){
    console.log(1)
} else {
    console.log(0)
}


// 3. Given any number between 1 and 12. Print the name of the respective month.

switch (number) {
    case (1): 
      console.log ('January');
      break;
    case(2):
      console.log ('February');
      break;
    case(3):
      console.log ('March');
      break;
    case(4):
      console.log ('April');
      break;
    case(5):
      console.log ('May');
      break;
    case(6):
      console.log ('June');
      break;
    case(7):
      console.log ('July');
      break;
    case(8):
      console.log ('August');
      break;
    case(9):
      console.log ('September');
      break;
    case(10):
      console.log ('October');
      break;
    case(11):
      console.log ('November');
      break;
    case(12):
      console.log ('December');
      break;
    default:
      console.log ("We don't have such month")
}


// 4. Given three numbers. Find the maximum one.

let num1 = 10;
let num2 = 27;
let num3 = -16;
if (num1 > num2 && num1 > num3){
    console.log(num1)
} else if (num2 > num1 && num2 > num3){
    console.log(num2)
} else if (num3 > num1 && num3> num2){
    console.log(num3)
}

// 5. Given a number. Print its absolute value. (without Math.abc)

let number = -55
    if (number < 0) {
    number *= -1;
}

// 6. Declare three variables. Two of them are the bounds of a range. Print “In bounds”, if the
// third number is in the range, otherwise print “Out of bounds”.

let num1 = 15;
let num2 = 37;
let num3 = 7;
if (num3 < num1 && num3 > num2 || num3 > num1 && num3 < num2){
    console.log("In bounds")
} else{
    console.log("Out of bounds")
}