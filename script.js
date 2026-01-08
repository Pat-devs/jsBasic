// DOM (Document object model) introduction

// select html elements with JS

// 1. how to select by a tag name ? (like CSS, select h1 { ... }) in JS...


let h1Element = document.querySelector("h1")

console.log(h1Element)

// select p tag (NOTE: unlike in CSS, this will only select the first p tag). To select multiple requires a different method, more on that later :)

let paragraphElement = document.querySelector("p")

console.log(paragraphElement)

// 2. How to select elements by class name ?

let numbersClassElement = document.querySelector(".numbers")

console.log(numbersClassElement)

// 3. How to select element by id ?

let numbersIdElement = document.querySelector("#numbers")

console.log(numbersIdElement)


// how to change an element ?
h1Element.textContent = 'Javascript' // to change or remove text

paragraphElement.innerHTML = `<b>Hei</b>` // innerHTML allows us to create html tags with javascript


let users = [
  "Tom",
  "Eric",
  "Jessica",
  "Scott",
  "Anna",
  "Carl",
  "Elisabeth",
  "Benny",
  "Oliver",
  "Andy",
  "Jenny",
  "Ashley",
  "Erin",
  "Patrick",
];

let noeText = "Hei"
noeText += " og hadet!"

console.log(noeText)


document.body.innerHTML += `<p>${noeText}</p>`



// select the div container

containerElement = document.querySelector(".container")


for (const user of users) {
    
    containerElement.innerHTML += `<li>${user}</li>`
}