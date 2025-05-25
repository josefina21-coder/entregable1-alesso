let historial = [];

function convertirTemperatura() {
    const grados = parseFloat(document.getElementById('grados').value);
    const tipo = document.getElementById('tipoConversion').value;
    let resultadoTexto = '';

    if (isNaN(grados)) {
        resultadoTexto = 'Por favor ingresa un número válido.';
    } else {
        let resultado;
        if (tipo === 'cToF') {
            resultado = (grados * 9 / 5) + 32;
            resultadoTexto = `${grados}°C = ${resultado.toFixed(2)}°F`;
            actualizarTermometro(grados, 'C');
        } else {
            resultado = (grados - 32) * 5 / 9;
            resultadoTexto = `${grados}°F = ${resultado.toFixed(2)}°C`;
            actualizarTermometro(resultado, 'C');
        }

        historial.push(resultadoTexto);
    }

    document.getElementById('resultado').innerText = resultadoTexto;
}

function mostrarHistorial() {
    const historialDiv = document.getElementById('historial');
    historialDiv.innerHTML = '<h3>Historial</h3>' + historial.map(item => `<p>${item}</p>`).join('');
}

function borrarHistorial() {
    historial = [];
    document.getElementById('historial').innerHTML = '';
}

function actualizarTermometro(tempCelsius, tipo) {
    let porcentaje = Math.min(Math.max((tempCelsius + 20) / 120 * 100, 0), 100); // Normaliza de -20 a 100°C
    let color;

    if (tempCelsius <= 0) {
        color = 'blue';
    } else if (tempCelsius <= 25) {
        color = 'orange';
    } else {
        color = 'red';
    }

    const nivel = document.getElementById('nivel-temperatura');
    nivel.style.height = `${porcentaje}%`;
    nivel.style.backgroundColor = color;
}
