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



/* 
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"
*/

function toUpperCase(text) {
    if (text.endsWith("!")) {
        return text.toUpperCase() 
    }
    else {
        return text.toLowerCase()
    }
//return text.toUpperCase() + "!"
}

// console.log(toUpperCase("Dette er kult!"))

/* 
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.
*/

function greet(name, time) {
    if (time < 0 || time > 23) return "Ugyldig tid"

    else if (time >= 0 && time <= 5) return "God natt " + name
    else if (time >= 6 && time <= 11) return "God morgen " + name
    else if (time >= 12 && time <= 17) return "God dag " + name
    else if (time >= 18 && time <= 23) return "God kveld " + name
    return "OOPS, noe gikk galt!"
}

function greetToo(name, time) {
  return (time < 0 || time > 23) ? "Ugyldig tid"
    : (time <= 5) ? "God natt " + name
    : (time <= 11) ? "God morgen " + name
    : (time <= 17) ? "God dag " + name
    : (time <= 23) ? "God kveld " + name
    : "OOPS, noe gikk galt!";
}

// console.log(greetToo("Patryk", 6))

/* 
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].
*/


function trimArray(array) {

    return array.slice(1,-1)
}

function trimArrayToo(array) {
    array.pop()
    array.shift()
    return array
}

let myArray = ["Rød", "Grønn", "Blå", "Gul"]

// myArray.shift() // fjerner "Rød"

// console.log(myArray)

// myArray.pop() // fjerner "Gul"

//console.log(myArray)

// let newArray = myArray.slice(1, -1)

//console.log(newArray)

// console.log(trimArrayToo(myArray))

/*
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".
*/

function updateText(text) {

    return text.trim().replaceAll("vanskelig", "gøy")
}

console.log(updateText("  Alt er vanskelig gil å begynne med, Javascript er vanskelig   "))

