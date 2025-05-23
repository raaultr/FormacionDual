// Objects

// Sintaxis
let person = {
    name: "Raul",
    age: 18,
    formation: "EscuelaArte"
}

// Acceso a propiedades

// Notación punto
console.log(person.name)

// Notación de corchetes
console.log(person["name"])

// Modificación
person.name = "Raul Troya"
console.log(person.name)

// Eliminar propiedades
delete person.age
console.log(person)

// Añadir propiedad
person.email = "rautslg06@gmail.com"
person["age"] = 18
console.log(person)

// Métodos (funciones)
let person2 = {
    name: "Raul",
    age: 18,
    formation: "EscuelaArte",
    walk: function(){
        console.log("La persona camina")
    }
}
person2.walk()

// Anidación de objects
let person3 = {
    name: "Raul",
    age: 18,
    formation: "EscuelaArte",
    walk: function(){
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 2,
        work: function(){
            console.log("La persona trabaja")
        }
    }
}
console.log(person3)
console.log(person3.job)
person3.job.work()

// Iteración
for(let value in person3){
    console.log(value)
}