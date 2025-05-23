// Bucles - Loops

// for
for(let i = 0; i < 5; i++){
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5]

for(let i = 0; i < numbers.length; i++){
    console.log(`Elemento: ${numbers[i]}`)
}

// while
let i = 0

while(i < 5){
    console.log(`Hola ${i}`)
    i++
}

// do while
let j = 6

do {
    console.log(`Hola ${i}`)
    j++
} while (j < 5)

// for of
myArray = [1, 2, 3, 4]

mySet = new Set (["Raul", "Troya", 18, true, "raultslg06@gmail.com"])

myMap = new Map([
    ["name", "Raul"],
    ["email", "raultslg06@gmail.com"],
    ["age", 18]
])

myString = "Hola JavaScript"

for(let valor of myArray){
    console.log(valor)
}

for(let valor of mySet){
    console.log(valor)
}

for(let valor of myMap){
    console.log(valor)
}

for(let valor of myString){
    console.log(valor)
}