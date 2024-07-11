/**
 * función saludo
 * auto: Maria alejandra
 * fecha: 14 de junio de 2024
 */

function edad(){
    let yearBegin =parseInt(document.getElementById("txnumberUno").value);
    let yearNew = new Date().getFullYear();
    let edade = yearNew - yearBegin;
    document.getElementById("respuesta").innerHTML=`<strong> la edad es: </strong>${edade}`;
    return false
}