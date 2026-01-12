// Oppgavesett #3 - Loops & Objects

// Oppgave #1 
const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const people = [
	{
		name: "Thomas",
		male: true,
		age: 23,
		hobbies: ["cycling", "football", "pool"]
	},
	{
		name: "Susan",
		male: false,
		age: 26,
		hobbies: ["jogging", "travelling", "dancing"]
	},
	{
		name: "Monica",
		male: false,
		age: 21,
		hobbies: ["skateboarding", "guitar", "concerts"]
	},
	{
		name: "Avery",
		male: true,
		age: 28,
		hobbies: ["writing", "games", "memes"]
	},
	{
		name: "Phillip",
		male: true,
		age: 24,
		hobbies: ["boxing", "wrestling", "mma"]
	},
	{
		name: "Otto",
		male: true,
		age: 36,
		hobbies: ["movies", "cinema", "music"]
	},
	{
		name: "Annabelle",
		male: false,
		age: 30,
		hobbies: ["makeup", "fashion", "shopping"]
	},
	{
		name: "Cathy",
		male: false,
		age: 18,
		hobbies: ["design", "drawing", "css"]
	}
];
let combinedAge = 0;
let averageAge = 0;

/* 
Bruk en vanlig 'for-løkke' til å iterere gjennom `people`-arrayet og utfør følgende:

- Hvis objektets `name`-verdi er "Otto", skal ingen av endringene nedenfor gjøres 
  på det objektet (hint: bruk `continue`-nøkkelordet).

- Lag en ny nøkkel på hvert person-objekt i arrayet kalt "city" og sett verdien
  til en random by fra `cities`-arrayen.

- Lag en ny nøkkel på hvert person-objekt kalt "title" og sett den til "Mr." for
  menn og "Ms." for kvinner.
	
- Øk alderen med 2.

- Legg til "coding" i begynnelsen av hobby-arrayet i hvert objekt.

**PS**: Bruk kun én løkke for å gjøre alle de ovennevnte stegene.

Bruk `console.log(people)` etter løkken for å sjekke at endringene er riktige.

Bruk løkken din til å regne ut den kombinerte alderen til alle person-objektene 
og lagre det i variabelen `combinedAge`.

Deretter, etter løkken, bruk den kombinerte alderen til å regne ut gjennomsnittsalderen
for alle, og lagre det i variabelen `averageAge`.

Gjør beregningene ETTER at du legger til to år på alderen, og husk, hopp over Otto!
*/

for (let index = 0; index < people.length; index++) {
    // current person
    const person = people[index];

    // a) Skip Otto:
    if (person.name === "Otto") {
        continue;
    }

    // b) - Lag en ny nøkkel på hvert person-objekt i arrayet kalt "city" og sett verdien til en random by fra `cities`-arrayen.


    // lag en ny nøkkel (key) i person objektet...
    const randomCityIndex = Math.ceil(Math.random() * cities.length - 1)
    person.city = cities[randomCityIndex];

    // c) - Lag en ny nøkkel på hvert person-objekt kalt "title" og sett den til "Mr." for menn og "Ms." for kvinner.

    // Check if person is male or female
    if (person.male === true) {
        person.title = "Mr."
    } else {
        person.title = "Ms."
    }
    
    console.log(person);
}

console.log("Random number...")

console.log(Math.floor(Math.random() * cities.length))


// Math.random, gir aldri 1.0 lll 0.00000001 - 0.99999999 

console.log(Math.ceil(5.9999999) - 1)