// DOM (Document object model) introduction

// select html elements with JS

// 1. how to select by a tag name ? (like CSS, select h1 { ... }) in JS...


let h1Element = document.querySelector("h1")

console.log(h1Element)

// select p tag (NOTE: unlike in CSS, this will only select the first p tag). To select multiple requires a different method, more on that later :)

let paragraphElement = document.querySelector("p")

console.log(paragraphElement)