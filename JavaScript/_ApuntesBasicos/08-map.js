// Map

// Declaración
let myMap = new Map()

console.log(myMap)

// Inicialización
myMap = new Map([
    ["name", "Raul"],
    ["email", "raultslg06@gmail.com"],
    ["age", 18]
])
console.log(myMap)

// MÉTODOS Y PROPIEDADES

// set: modifica o añade valores
myMap.set("formacion", "EscuelaArte")
myMap.set("name", "Raul Troya")
console.log(myMap)

// get: busca una clave
console.log(myMap.get("name"))

// has: comprueba si una clave existe o no
console.log(myMap.has("surname")) // false (no existe)
console.log(myMap.has("age")) // true (existe)

// delete: elimina valores mediante la clave
myMap.delete("email")
console.log(myMap)

// keys: muestra un listado con las claves | values: muestra los valores | entries: ambas cosas
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size: muestra el tamaño del map
console.log(myMap.size)

// clear: borra todo el map
myMap.clear()
console.log(myMap)