/**
 * función saludo
 * auto: Maria alejandra
 * fecha: 14 de junio de 2024
 */



function numero() {
    const numeroUno = parseFloat(document.getElementById('txnumberUno').value);
    const numeroDos = parseFloat(document.getElementById('txnumberDos').value);
    let resultado;

    if (numeroUno > numeroDos) {
        resultado = "numero 1 es mayor";
    } else {
        
        resultado = "numero 2 es mayor";
    }

    document.getElementById('respuesta').innerText = resultado;
}







