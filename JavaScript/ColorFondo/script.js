function changeColor() {
    let color = `hsl(${Math.random() * 360}, 70%, 70%)`; 
    document.body.style.backgroundColor = color;
    // hsl --> Hue (tono), Saturation (saturación), Lightness (luminosidad).
    // ${Math.random() * 360} --> Math.random() da un número entre 0 y 1 y lo multiplicas por 360 //
}