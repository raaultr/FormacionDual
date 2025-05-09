function invertir(){
    const input = document.getElementById('entradaText').value; // cojo el valor introducido en el input (el texto)
    const invertido = input.split('').reverse().join(''); // lo invierto
    document.getElementById('resultado').textContent = `Invertido: ${invertido}`; // muestro el resultado
}