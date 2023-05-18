//1. Write a function that will take a number and return the number of its digits.

function countDigits (num) {
    let counter = 0
       if( num < 0 ){
        num *= -1
    }
       if( num === 0 ){
        num = 1
    }
    for (num; num > 0; num = (num - num%10)/10) {
        counter += 1
    }
    console.log(counter)
}

//2. Write a function that will take a number and return the count of ‘9’ digit.

function countNine (num){
    let counter = 0
    for (num; num > 0; num = (num - num%10)/10){
        if( num % 10 === 9 ){
            counter += 1
        } else {
            counter
        }
    }
    console.log(counter)
}


//3. Insert a number. Print “yes” if it contains 3 successive zeros, otherwise print “no”.

// Just tried for 3 zeros all  but no way for succesive zeros(((