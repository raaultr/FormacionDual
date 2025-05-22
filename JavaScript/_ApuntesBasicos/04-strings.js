// Strings

// Concatenación de cadenas
let myName = "Raul"
let greeting = "Hola, " + myName
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])

// Métodos comunes
console.log(greeting.toUpperCase()) // trasnforma a mayúsulas
console.log(greeting.toLocaleLowerCase()) // transforma a minúsculas
console.log(greeting.indexOf("Raul")) // índice donde ha encontrado la palabra "Raul"
console.log(greeting.includes("Hola")) // comprueba si se incluye la palabra "Hola"
console.log(greeting.slice(0, 8)) // muestra la cadena desde el elemento x (0) hasta el y (8)
console.log(greeting.replace("Raul", "Troya")) // sustituye una palabra por otra

// Template literals (plantillas literales)
// se pueden crear cadenas de texto en varias líneas con acento invertido `
let message = `Hola, este es mi
curso de JavaScript`
console.log(message)

let email = "raultslg06@gmail.com"
console.log(`Hola, ${myName}! Tu email es ${email}`)