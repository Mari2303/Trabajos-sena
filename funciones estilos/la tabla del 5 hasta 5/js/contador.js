/**
 * función saludo
 * auto: Maria alejandra
 * fecha: 14 de junio de 2024
 */

function multi() {
    const numero = 5;
    let resultado = `Tabla del ${numero}:\n`;

    for (let contador = 1; contador <= numero; contador++) {
        resultado += `${numero} x ${contador} = ${numero * contador}\n`;
    }

    document.getElementById('respuesta').innerText = resultado;
}