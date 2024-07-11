/**
 * función saludo
 * auto: Maria alejandra
 * fecha: 14 de junio de 2024
 */
function Tablas() {

    let resultado = '';
    let multiplicar

    for (let contador = 1; contador <= 5; contador++) {
        resultado += `Tabla del ${contador}:\n`;
        for ( multiplicar = 1; multiplicar <= 5; multiplicar++) {
            const producto = contador * multiplicar;
            const etiqueta = producto % 2 === 0 ? 'Buzz' : 'BASS';
            resultado += `${contador} x ${multiplicar} = ${producto} (${etiqueta})\n`;
        }
        resultado += '\n'; // Añade una línea en blanco entre tablas
    }

    document.getElementById('respuesta').innerText = resultado;
}










   