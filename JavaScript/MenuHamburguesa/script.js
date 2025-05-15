const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");  // Añado al nav la clase visible
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");  // Elimino del nav la clase visible
})