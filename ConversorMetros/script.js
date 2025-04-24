function convertir(){
    const metros = parseFloat(document.getElementById("metros").value);
    const ud = document.getElementById("ud").value;
    const resultado = document.getElementById("resultado");

    if(isNaN(metros)){ // no funciona si pongo !metros
        resultado.textContent = "ERROR: número inválido.";
        return;
    }

    let conv = 0;
    let udText = "";

    switch(ud){
        case "km":
            conv = metros / 1000;
            udText = "kilómetros";
            break;
        case "cm":
            conv = metros * 100;
            udText = "centímetros";
            break;
        case "mm":
            conv = metros * 1000;
            udText = "milímetros";
            break;
    }

    resultado.textContent = `${metros} metros son aproximadamente ${conv} ${udText}.`;

}
