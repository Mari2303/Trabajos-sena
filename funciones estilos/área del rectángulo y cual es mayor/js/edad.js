/**
 * función saludo
 * auto: Maria alejandra
 * fecha: 14 de junio de 2024
 */

function rectangulos(){
    let baseUno =parseInt(document.getElementById("txnumberUno").value);
    let baseDos =parseInt(document.getElementById("txnumberDos").value);
    let alturaUno =parseInt(document.getElementById("txnumberUno").value);
    let alturaDos =parseInt(document.getElementById("txnumberDos").value);
    
    
    let rectanguloUno = baseUno - alturaUno;
    let rectanguloDos = baseDos - alturaDos;

    let resultado;
    
    if(rectanguloUno > rectanguloDos){
        resultado = "rectangulo 1 es mayor"
    }
    else{
        resultado = " rectangulo 2 es mayor"
    }
    
    document.getElementById('respuesta').innerText = resultado;
      
    return false
}