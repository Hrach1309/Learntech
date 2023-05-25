//1. Given a string and a symbol. Find the number of occurrences of the symbol in the string.

function myChar (string, char) {
    let count = 0
    for (let i = 0; i<string.length; i++){
        if(string[i] === char) {
            count += 1
        }
    }
     return count   
}

// 2. Given a string. Check whether the string is palindrome or not.

function isPalindrome (string) {
    for (let i = 0; i<string.length; i++) {
            if(string[i] === string[string.length - 1 - i]) {
                console.log('yes')
                return
            } 
    
      }
    console.log('no')
}

// 3. Given a string and symbols. Change first symbol by the second one in the string.

function changingSymb(string, symbOne, symbTwo) {
    let newString = ''
    for (let i = 0; i<string.length; i++) {
        if (string[i] === symbOne) {
            newString += symbTwo
            continue
        }
        newString += string[i]
    }
    console.log(newString)
}

//4. Print the following number pattern:

function pattern(n) {
    let line = "\n";
    let res = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i ; j++) { 
            res += j 
        }
         res += line
    }
    for (let i = 1; i <= n - 1; i++) {
        for (let j = 1; j < n - i + 1 ; j++) { 
            res += j 
        }
         res += line
    }
    console.log(res)
}

//5. Print following patterns

// don't mind it