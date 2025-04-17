let temperaturas = [];

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnNombre").addEventListener("click", registrarUsuario);
    document.getElementById("btnAgregar").addEventListener("click", agregarTemperatura);
    document.getElementById("btnMostrar").addEventListener("click", mostrarClimas);
    document.getElementById("btnLimpiar").addEventListener("click", limpiarTodo);
});

function registrarUsuario() {
    const nombre = document.getElementById("nombre").value.trim();
    const mensaje = nombre
        ? `¡Bienvenido/a, ${nombre}, a nuestro sitio web!`
        : "¡Bienvenido/a a nuestro sitio web!";
    document.getElementById("mensajeBienvenida").innerText = mensaje;
}

function agregarTemperatura() {
    const input = document.getElementById("tempInput");
    const valor = parseInt(input.value);

    if (!isNaN(valor)) {
        temperaturas.push(valor);
        input.value = '';
        actualizarLista(false);
    } else {
        alert("Por favor ingresa una temperatura válida.");
    }
}

function actualizarLista(mostrarClima = false) {
    const lista = document.getElementById("listaTemperaturas");
    lista.innerHTML = '';

    for (let i = 0; i < temperaturas.length; i++) {
        const item = document.createElement("li");
        const temp = temperaturas[i];

        if (mostrarClima) {
            const clima = determinarClima(temp);
            item.innerText = `Temp: ${temp}°C - ${clima}`;
        } else {
            item.innerText = `Temp: ${temp}°C`;
        }

        lista.appendChild(item);
    }
}

function determinarClima(temp) {
    if (temp > 40) return "¡Hace mucho calor!";
    if (temp >= 15 && temp <= 30) return "Está templado.";
    return "Hace frío.";
}

function mostrarClimas() {
    actualizarLista(true);
}

function limpiarTodo() {
    temperaturas = [];
    document.getElementById("listaTemperaturas").innerHTML = '';
    document.getElementById("tempInput").value = '';
}
