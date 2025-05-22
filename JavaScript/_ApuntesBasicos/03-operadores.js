// OPERADORES

// OPERADORES ARITMÉTICOS
let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicar
console.log(a / b) // Dividir

console.log(a % b) // Módulo (Resto de la división)
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)

// OPERADORES DE ASIGNACIÓN
let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

// OPERADORES DE COMPARACIÓN
console.log(a > b)
console.log(a < b)
console.log(10 >= 10)
console.log(a <= b)
console.log(a == b) // El == comprobamos igualdad por VALOR
console.log(a == 6)
console.log(a == "6")
console.log(a === a)  // Iugaldad por identidad (tipo y valor)
console.log(a === 6) // true, tipo=number
console.log(a === "6") // false, tipo=cadena texto
console.log(a != 6)
console.log(a !== "6")
console.log(0 == false) // false
console.log(1 == false) // true
console.log(0 == "") // true
console.log(0 == "Hola") // false
console.log(undefined == null) // true
console.log(undefined === null) // false


// OPERADORES LÓGICOS: compara el valor booleano

// and (&&)
console.log(5 > 10 && 15 > 20) // false
console.log(5 < 10 && 15 < 20) // true
console.log(5 < 10 && 15 > 20) // false

// or (||)
console.log(5 > 10 || 15 > 20) // false
console.log(5 < 10 || 15 < 20) // true
console.log(5 < 10 || 15 > 20) // true

// not (!): invierte el resultado (!true) --> false
console.log(!(5 > 10 && 15 > 20)) // true
console.log(!(5 > 10 || 15 > 20)) // true


// OPERADORES TERNARIOS
const isRaining = true

isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")