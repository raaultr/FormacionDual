function calcularEdad() {
    const input = document.getElementById('birthday'); // coge el valor del input con id birthday
    const resultado = document.getElementById('resultado');
    const anioNacimiento = parseInt(input.value); // coge el valor introducido en el const input. Se podría usar input.value directamente pero asi queda más limpio el code
    const anioActual = new Date().getFullYear();

    if(!anioNacimiento || anioNacimiento > anioActual){
        resultado.textContent = "ERROR: año inválido.";
        return;
    }

    const edad = anioActual - anioNacimiento;
    resultado.textContent = `Tienes ${edad} años.`;
}