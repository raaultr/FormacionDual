/* -- INICIO: CONTADOR -- */
// Fecha de la Velada del Año V (26 de julio de 2024 a las 20:00)
const fechaObjetivo = new Date("July 26, 2025 20:00:00").getTime();

function actualizarCuentaRegresiva() {
    // Obtiene la fecha y hora actual en milisegundos
    const ahora = new Date().getTime();
    // Calcula la diferencia entre la fecha objetivo y la fecha actual
    const diferencia = fechaObjetivo - ahora;

    if (diferencia > 0) {
        // Convierte la diferencia a días, horas, minutos y segundos
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        // Actualiza el HTML con los valores calculados
        document.getElementById("days").textContent = dias.toString().padStart(2, "0");
        document.getElementById("hours").textContent = horas.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutos.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = segundos.toString().padStart(2, "0");
    } else {
        // Si el tiempo llega a 0, muestra un mensaje
        document.getElementById("countdown").textContent = "¡La Velada ha comenzado!";
    }
}

setInterval(actualizarCuentaRegresiva, 1000); // Llama a la función cada segundo para actualizar la cuenta regresiva
actualizarCuentaRegresiva(); // Llama a la función inmediatamente para evitar que aparezcan ceros al cargar la página


function showFighter(fighter) {
    const fighterImage = document.getElementById('fighter-image');
  
    // Ruta de las imágenes grandes
    const images = {
      ryu: 'ryu_large.jpg',
      ken: 'ken_large.jpg',
      // Agrega más luchadores aquí
    };
  
    fighterImage.src = images[fighter];
    fighterImage.style.display = 'block';
  }
