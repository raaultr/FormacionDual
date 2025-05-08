// Hago una lista con las posibles opciones
const elecciones = ['piedra', 'papel', 'tijera'];
let puntajeJugador = 0;
let puntajebot = 0;

// Selecciono los elementos del HTML donde se mostrarán los resultados
const botones = document.querySelectorAll('.opcion');
const textoResultado = document.getElementById('texto-resultado');
const spanJugador = document.getElementById('puntaje-jugador');
const spanbot = document.getElementById('puntaje-bot');
const imagenJugador = document.getElementById('imagen-jugador');
const imagenbot = document.getElementById('imagen-bot');

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', function() {
      // Obtenemos la elección del jugador (piedra, papel o tijera)
      const eleccionJugador = botones[i].dataset.eleccion;
      
      // El bot elige una opción aleatoria entre piedra, papel y tijera
      const eleccionBot = elecciones[Math.floor(Math.random() * elecciones.length)];
  
      // Se determina el ganador
      const resultado = determinarGanador(eleccionJugador, eleccionBot);
  
      // Muestra el resultado
      mostrarResultado(eleccionJugador, eleccionBot, resultado);
    });
  }

// Función que determina el ganador del juego
function determinarGanador(jugador, bot) {
    if (jugador === bot) return 'EMPATE!';

    if (
      (jugador == 'piedra' && bot == 'tijera') ||
      (jugador == 'papel' && bot == 'piedra') ||
      (jugador == 'tijera' && bot == 'papel')
    ) {
      // Si el jugador gana, +1 punto
      puntajeJugador++;
      return 'HAS GANADO!';
    } else {
      // Si el bot gana, +1 punto
      puntajebot++;
      return 'HAS PERDIDO!';
    }
  }
  
  function mostrarResultado(jugador, bot, resultado) {
    // Se actualiza el texto de resultado
    textoResultado.textContent = `${resultado}`;
    
    // Se actualizan las imágenes de las elecciones
    imagenJugador.src = `img/${jugador}.png`;
    imagenJugador.alt = jugador;
  
    imagenbot.src = `img/${bot}.png`;
    imagenbot.alt = bot;
  
    spanJugador.textContent = puntajeJugador;
    spanbot.textContent = puntajebot;
  }