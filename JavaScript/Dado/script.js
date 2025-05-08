const dado = document.getElementById('dado');
const boton = document.getElementById('tirar');
const numero = document.getElementById('numero');

// creo un array con los posibles resultados del dado
const resultados = [1, 2, 3, 4, 5, 6];

boton.addEventListener("click", () => {
    const numRandom = resultados[Math.floor(Math.random() * resultados.length)];
    numero.textContent = `Ha salido el número ${numRandom}`;
    dado.style.transform = "rotate(" + (Math.random() * 360) + "deg)"; // animacion de rotacion
});