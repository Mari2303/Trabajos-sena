/**
 * función saludo
 * auto: Maria alejandra
 * fecha: 14 de junio de 2024
 */

function edad(){
    let yearBegin =parseInt(document.getElementById("txnumberUno").value);
    let yearNew = new Date().getFullYear();
    let edade = yearNew - yearBegin;
    let verificacion;
    if(edade >=18){
        verificacion = "Es mayor de edad"
    }
    else{
        verificacion = "Es menor de edad"
    }
    document.getElementById("respuesta").innerHTML=`<strong> la edad es: </strong>${edade}`;
    document.getElementById("verificacion").innerHTML=`<strong> verificacion: </strong>${verificacion}`;
    
      return false
}