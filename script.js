window.onload = function() {
    let nombreUsuario = prompt("Ingrese su nombre");
    console.log(`Nombre del usuario: ${nombreUsuario}`);
    if (nombreUsuario) {
        alert(`¡Bienvenido/a, ${nombreUsuario} a nuestro sitio web!`);
    } else {
        alert("¡Bienvenido/a a nuestro sitio web!");
    }
}
let temperatura = ''; 
function agregarTemperatura(valor) {
    temperatura += valor;
    document.getElementById('resultado').value = temperatura;
}
function limpiar() {
    temperatura = '';
    document.getElementById('resultado').value = '';
}
function determinarClima(temperatura) {
    const temp = parseInt(temperatura);
    
    if (isNaN(temp)) {
        return "Por favor ingresa una temperatura válida.";
    } else if (temp > 40) {
        return "¡Hace mucho calor!";
    } else if (temp >= 15 && temp <= 30) {
        return "Está templado.";
    } else {
        return "Hace frío.";
    }
}
function mostrarClima() {
    const clima = determinarClima(temperatura);
    document.getElementById('resultado').value = clima;
}
