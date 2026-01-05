/*
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

*/

// returns oddetall if number is odd, or partall if number is even
function oddOrEven(number) {
    if (number %2 === 1) return "oddetall"
    else return "partall"
}

// as above, but without else statement, this works due to return terminating the function
function oddOrEvenAlso(number) {
    if (number %2 === 1) return "oddetall"
    return "partall"
}

// as above, but using "ternary operator"
function oddOrEvenToo(number) {
    return number %2 === 1 
        ? "oddetall" // if true 
        : "partall" // if false
}

// modulo does the following:
// 1. divides by the number given, f.eks number / 2
// 2. returns if there is any remainder


// 2 / 2 = 1... 0 rest
// 3 / 2 = 1... 1 rest
// 4 / 2 = 2...  

// console.log(oddOrEvenToo(1))

// fizzBuzz modulo example
// if number is divisble by both 3 and 5 return FizzBuzz
// if number is divisble by 3 return Fizz
// if nubmer is divisible by 5 return Buzz
// in all other cases return the number itself
// wikipedia link: https://en.wikipedia.org/wiki/Fizz_buzz

function checkFizzBuzz(number) {
    if (number %3 === 0 && number %5 === 0) return "FizzBuzz"
    else if (number %3 === 0) return "Fizz"
    else if (number %5 === 0) return "Buzz"
    else return number
}

console.log(checkFizzBuzz(1))
console.log(checkFizzBuzz(2))
console.log(checkFizzBuzz(3))
console.log(checkFizzBuzz(4))
console.log(checkFizzBuzz(5))
console.log(checkFizzBuzz(6))
console.log(checkFizzBuzz(7))
console.log(checkFizzBuzz(8))
console.log(checkFizzBuzz(9))
console.log(checkFizzBuzz(10))
console.log(checkFizzBuzz(11))
console.log(checkFizzBuzz(12))
console.log(checkFizzBuzz(13))
console.log(checkFizzBuzz(14))
console.log(checkFizzBuzz(15))
console.log(checkFizzBuzz(16))
console.log(checkFizzBuzz(17))
console.log(checkFizzBuzz(18))
console.log(checkFizzBuzz(19))