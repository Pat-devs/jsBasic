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

// console.log(updateText("  Alt er vanskelig gil å begynne med, Javascript er vanskelig   "))

/* 
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".
*/

items.shift()

// console.log(items) // ["Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

// Steg 2a: Finn "Viskelær"
const viskelærIndex = items.indexOf("Viskelær")

// Steg 2b: ersatt med "Linjal"

items[viskelærIndex] = "Linjal"

// console.log(items) // ['Penn', 'Notatbok', 'Linjal', 'Blyant', 'Markør']

// Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

items.splice(0, 2, "Markeringspenn") // første argument (0) er index, andre argument (2) er antall

// console.log(items)

// Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

// console.log(items.join(" | "))

const names = ["Tom", "Eric", "Jessica"];

// oppgave: skriv ut alle navn, en på hver linje

// console.log(names[0])
// console.log(names[1])
// console.log(names[2])

// Loops ((Løkker på norsk))

// for (let index = 0; index < array.length; index++) {
//    const element = array[index];
//    
//}

const oldItems = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

for (const element of oldItems) {
    break
    console.log(element)
    
    if (element === "Notatbok") break // break stopper loopen
}


let text = "Notatbok"

for (const element of text) {
    console.log(element)
}