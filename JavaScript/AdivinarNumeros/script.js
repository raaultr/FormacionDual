let numSecreto = Math.floor(Math.random() * 100) + 1;  // Número secreto se genera una sola vez antes de iniciar. Con Math.floor evitamos que salgan decimales
let intentos = 0; 

function adivinarNumero() {
    const number = parseInt(document.getElementById('number').value);
    const resultado = document.getElementById('resultado');
    const intentosText = document.getElementById('intentos'); 

    // Comprobación de si el número ingresado sea válido
    if (isNaN(number) || number < 1 || number > 100) {
        resultado.textContent = "Ingresa un número válido entre 1 y 100.";
        resultado.style.color = "orange";  // Cambiar a naranja para indicar un error
        return;  
    }

    intentos++;  

    // Comprobación de si el número ingresado es correcto
    if (number === numSecreto) {
        resultado.textContent = `¡Felicidades! Has adivinado el número en ${intentos} intentos.`;
        resultado.style.color = "green";  // Si el usuario ha acertado el número, color verde
    } else if (number > numSecreto) {
        resultado.textContent = "¡Demasiado alto! Intenta de nuevo.";
        resultado.style.color = "red";  // Si el número es más alto, color rojo
    } else {
        resultado.textContent = "¡Demasiado bajo! Intenta de nuevo.";
        resultado.style.color = "blue";  // Si el número es más bajo, color azul
    }

    
    intentosText.textContent = `Número de intentos: ${intentos}`;
}
