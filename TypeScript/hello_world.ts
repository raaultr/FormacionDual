// Sintaxis muy parecido a JS
console.log("Hola, TypeScript!")

/* -- VARIABLES -- */
// let PUEDE variar, const NO PUEDE variar
let myString = "Esto es una cadena de texto"
console.log(myString)
myString = "Ha variado la cadena"
console.log(myString)
// myString = 1 (Error, TS entiende que la variable es cadena de texto)

/*
(DA ERROR)
const myString2 = "Esto es una cadena de texto"
console.log(myString)
myString2 = "Ha variado la cadena"
console.log(myString2)
*/

// Ejemplo 1 Crear varibales
let nombre = "Juan";
let edad = 25;
let esEstudiante = true;
console.log("Nombre: "+nombre+"\nEdad: "+edad+"\nesEstudiante: "+esEstudiante)

// Ejemplo 2 Funciones con tipos
function sumar(a, b){
    return a+b;
}
console.log(sumar(2, 4))

// Ejemplo 3 Tipos de Arrays
let numeros: number[] = [10, 20, 30, 40]
console.log(numeros)