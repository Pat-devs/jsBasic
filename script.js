/*
3.

Lag følgende funksjon:

Funksjonen skal ta inn ett array av strings som parameter.

Inne i funksjonen, gjør følgende:

Skriv en løkke som itererer gjennom stringene i arrayet, og gjør følgende:
- Fjern mellomrom fra starten og slutten av hvert ord.
- Gjør alle ordene om til små bokstaver.

Bruk en "for...of"-løkke.

Etter løkken, bruk en metode for å sette sammen arrayet til en enkelt string 
med et enkelt mellomrom mellom ordene (" "), og returner den resulterende stringen.

Eksempel:
[" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]
skal returnere:
"this text needs to be cleaned up"
*/


function cleanUp(array) {
    let outputText = ""

    // loop through the array
    for (const word of array) {
        outputText += " " + word.trim()
    }
    outputText = outputText.trim().toLowerCase()
    
    return outputText
}


let exampleArray = [" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]

// console.log(cleanUp(exampleArray))

function cleanUp2(array) {
    const outputText = []
    for (const word of array) {
        outputText.push( word.trim().toLowerCase() )
    }

    return outputText.join(" ")
}

console.log(cleanUp2(exampleArray))
