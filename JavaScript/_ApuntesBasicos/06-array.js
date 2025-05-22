// array

// Declaración
let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización
myArray = [3]
myArray2 = new Array(3) // reserva 3 huecos en la lista

console.log(myArray)
console.log(myArray2)

myArray = ["Raul", "Troya", 18, true]
myArray2 = new Array("Raul", "Troya", 18, true) 

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Raul"
myArray2[1] = "Troya"
myArray2[2] = "EscuelaArte"
console.log(myArray2)

// MÉTODOS COMUNES
myArray = []

// push y pop
myArray.push("Raul") // PUSH añade elementos al array
myArray.push("Troya")
myArray.push(18)
myArray.push("EscuelaArte")

console.log(myArray) 

console.log(myArray.pop()) // elimina el ultimo elemento y lo devuelve
myArray.pop() // POP elimina el último elemento del array

console.log(myArray)

// shift y unshift
myArray.shift() // elimina el primer elemento del array
console.log(myArray)

myArray.unshift("Raul", 18) // añade elementos al pricipio del array
console.log(myArray)

// length 
console.log(myArray.length)

// clear
myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice 
myArray = ["Raul", "Troya", 18, true]

let myNewArray = myArray.slice(1, 2) // nos quedamos con un pedazo del array, en este caso desde el 1 hasta el 2 (sin incluirlos).

console.log(myArray)
console.log(myNewArray)

// splice
myArray.splice(1, 3) // elimino elementos, en este caso desde el 1 hasta el 3 (se incluye el 3).
console.log(myArray)

myArray = ["Raul", "Troya", 18, true]

myArray.splice(1, 2, "Nuevo elemento") // eliminamos los elementos del 1 al 2 y añadimos otro en su lugar
console.log(myArray)