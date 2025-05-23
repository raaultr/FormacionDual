// Funciones

//Simple

function myFunc(){
    console.log("¡Hola, función!")
}

for(let i = 0; i < 5; i++){
    myFunc()
}

// Con parámetros

function myFuncWithParams(name){
    console.log(`¡Hola, ${name}!`)
}

myFuncWithParams("Raul")

// Funciones anónimas

const myFunc2 = function(name){
    console.log(`¡Hola, ${name}!`)
}

myFunc2("Raul Troya")

// Arrow functions

const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)

myFunc3("Raul")

// Parámetros

function sum(a, b){
    console.log(a + b)
}

sum(5, 10)

// Valores por defecto

function defaultSum(a = 0, b = 0){
    console.log(a + b)
}

defaultSum(5)

// Retorno de valores

function mult(a, b){
    return a * b
}
let result = mult(5, 10)
console.log(result)

// Funciones anidadas

function extern(){
    console.log("Funcion externa")
    function intern(){
        console.log("Funcion interna")
    }
    intern()
}

extern()
// intern() Error: fuera del scope

// Funciones con orden superior: reciben otras funciones como argumento

/* function applyFunc(func, param){
    func(param)
}

applyFunc(myFunc4("Función de orden superior")) */

// forEach

myArray = [1, 2, 3, 4]

mySet = new Set (["Raul", "Troya", 18, true, "raultslg06@gmail.com"])

myMap = new Map([
    ["name", "Raul"],
    ["email", "raultslg06@gmail.com"],
    ["age", 18]
])


myArray.forEach(function(value) {
    console.log(value)
}) 

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))