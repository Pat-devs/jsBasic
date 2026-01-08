

let number1Element = document.querySelector("#number-1")

let number2Element = document.querySelector("#number-2")


let sumElement = document.querySelector("#sum")

number1Element.textContent = 5
number2Element.textContent = "5"


sumElement.textContent = Number(number1Element.textContent) + Number(number2Element.textContent)