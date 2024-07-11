/**
 * función saludo
 * auto: Maria alejandra
 * fecha: 14 de junio de 2024
 */

function multi() {
    const numero = 9;
    let resultado = `Tabla del ${numero} hasta el 5:\n`;

    for (let contador = 1; contador <= 5; contador++) {
        const producto = numero * contador;
        const paridad = producto % 2 === 0 ? 'PAR' : 'IMPAR';
        resultado += `${numero} x ${contador} = ${producto} (${paridad})\n`;
    }

    document.getElementById('respuesta').innerText = resultado;
}









   