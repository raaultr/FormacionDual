let count = 0; // let porque es una variable que puede cambiar, no siempre será 0.

function decrement(){
    count--;
    document.getElementById('count').textContent = count; // .textContent --> lee o cambia el texto de dentro de un elemento. En este caso el que tiene ID = count
}
function increment() {
    count++;
    document.getElementById('count').textContent = count;
  }