document.getElementById('add').addEventListener('click', function() {
  let nota = document.getElementById('nota').value;
if (nota) {
      let li = document.createElement('li');
      li.textContent = nota;
      
      // creo el botón de eliminar al lado de cada nota
      let bEliminar = document.createElement('button');
      bEliminar.textContent = 'ELIMINAR';
      bEliminar.classList.add('bEliminar');  // para poder editarlo con css
      bEliminar.addEventListener('click', function() {
          li.remove(); // si haces click elimina la nota
      });
      
      
      li.appendChild(bEliminar); // añado el botón al <li>    
      
      document.getElementById('listaNotas').appendChild(li); // añado el <li> a la lista      
      
      document.getElementById('nota').value = ''; // Limpia el textarea
  }
});