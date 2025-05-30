// barra de búsqueda
document.getElementById("search").addEventListener("input", function(){
    // obtiene el texto ingresado por el usuario y lo convierte en minusculas
    const searchTerm = this.value.toLowerCase();

    // selecciona las tarjetas de perros
    const dogs = document.querySelectorAll(".dog-card");

    // recorre cada card
    dogs.forEach(dog => {
        // obtiene el texto (p) de la tarjeta que contiene el nombre de la raza
        const breedText = dog.querySelector("p").textContent.toLowerCase();

        // comprueba si el texto coincide con la búsqueda
        if(breedText.includes(searchTerm)){
            dog.style.display = "block";    
        } else {
            dog.style.display = "none"; 
        }
    })
})

function filtrar(tamanio){
    const dogs = document.querySelectorAll('.dog-card')

    dogs.forEach( div => {
        const img = div.querySelector('img');
        const clase = img.classList;

        if(tamanio === 'todos'){
            div.style.display = 'block';
        } else {
            div.style.display = clase.contains(tamanio) ? 'block' : 'none';
        }

    })
}