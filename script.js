
// lag en ny nøkkel (key) i person objektet...
 Math.ceil(Math.random() * [].length - 1)



/* 
2.

Lag følgende funksjon:

Funksjonen skal ta inn ett tall som parameter.

Funksjonen skal returnere et array med tilfeldige tall mellom 1 og 6.
Lengden på arrayet bestemmes av tallet som funksjonen mottar som parameter
(tenk på det som antall terninger vi kaster).

Eksempler: 
diceRoller(4) skal returnere noe som: [4, 1, 2, 6]
diceRoller(6) skal returnere noe som: [5, 5, 6, 2, 3, 4]

Legg til en andre parameter i funksjonen som bestemmer hvor mange sider terningen skal ha.
diceRoller(5, 20) skal returnere et array med 5 tilfeldige tall fra 1-20.
*/

// function returns a random number between 1-6
function randomDice (sides) {
    return 1 + Math.floor(Math.random() * sides)
}

// function takes a count as parameter, and returns an array that equal is length
// each element in the array is a ranndom number between 1-6
function diceRoller(count) {
    const myArray = []

    for (let index = 0; index < count; index++) {
        
        myArray.push(randomDice(6))
        
    }
    return myArray
}


// console.log(diceRoller(60))

// example how to avoid duplicates when adding random elements ...

const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const myTrip = []

while (true) {
    const randomCity = cities[Math.floor(Math.random() * cities.length)]
    if (myTrip.indexOf(randomCity) >= 0) {
        console.error("not going to " + randomCity + " again!")
        break
    }
    else myTrip.push(randomCity)

    console.warn("Going to " + randomCity)
}

console.log("My trip was...")

console.table(myTrip)