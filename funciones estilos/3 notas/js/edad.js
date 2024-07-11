/**
 * función saludo
 * auto: Maria alejandra
 * fecha: 14 de junio de 2024
 */

function notas(){
    let notaUno =parseInt(document.getElementById("txnumberUno").value);
    let notaDos =parseInt(document.getElementById("txnumberDos").value);
    let notaTres =parseInt(document.getElementById("txnumberTres").value);
    
    let notas = (notaUno + notaDos + notaTres)/3;
   
    document.getElementById("respuesta").innerHTML=`<strong> el promedio de las 3 notas es: </strong>${notas}`;
    
    return false
}