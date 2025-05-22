// if, else if, else

// IF (si)
let age = 18

if(age == 18){
    console.log("La edad es 18")
}

// ELSE (si no)
if(age == 18){
    console.log("La edad es 18")
} else {
    console.log("La edad no es 18")
}

// ELSE IF (si no, si)
if(age == 18){
    console.log("La edad es 18")
} else if(age < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 18")
}

// OPERADOR TERNARIO
const message = age == 18 ? "La edad es 18" : "La edad no es 18"
console.log(message)

// SWITCH
let day = 0
let dayName

switch(day){
    case 0:
        dayName = "Lunes"
        break;
    case 1:
        dayName = "Martes"
        break;
    case 2:
        dayName = "Miércoles"
        break;
    case 3:
        dayName = "Jueves"
        break;
    case 4:
        dayName = "Viernes"
        break;
    case 5:
        dayName = "Sábado"
        break;
    case 6:
        dayName = "Domingo"
        break;
    default:
        dayName = "Número de día incorrecto."
}
console.log(dayName)