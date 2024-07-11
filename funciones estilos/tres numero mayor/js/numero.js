/**
 * función saludo
 * auto: Maria alejandra
 * fecha: 14 de junio de 2024
 */



function numeros() {
    const numeroUno = parseFloat(document.getElementById('txnumberUno').value);
    const numeroDos = parseFloat(document.getElementById('txnumberDos').value);
    const numeroTres = parseFloat(document.getElementById('txnumberTres').value);
    
    let resultado;

    if (numeroUno > numeroDos && numeroUno > numeroTres) {
        resultado = "numero 1 es mayor";
    }  else if (numeroDos > numeroUno && numeroDos > numeroTres) {
        
        resultado = "numero 2 es mayor";
    }
    else{
        resultado = "numero 3 es mayor "
    }

    document.getElementById('respuesta').innerText = resultado;
}







