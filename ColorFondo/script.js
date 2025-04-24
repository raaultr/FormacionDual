function changeColor() {
    let color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`; 
    document.body.style.backgroundColor = color;
    // hsl --> Hue (tono), Saturation (saturación), Lightness (luminosidad).
    // ${Math.floor(Math.random() * 360)} --> Math.random() da un número entre 0 y 1. Lo multiplicas por 360 y le hago Math.floor() para redondear hacia abajo. //
}