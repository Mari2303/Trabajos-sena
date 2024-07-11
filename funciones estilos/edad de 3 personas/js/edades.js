/**
 * función saludo
 * auto: Maria alejandra
 * fecha: 14 de junio de 2024
 */

    function edades(){

    let yearBeginUno =parseInt(document.getElementById("txnumberUno").value);
    let yearBeginDos =parseInt(document.getElementById("txnumberDos").value);
    let yearBeginTres =parseInt(document.getElementById("txnumberTres").value);

    let edadUno = yearNew - yearBeginUno;
    let edadDos = yearNew - yearBeginDos;
    let edadTres = yearNew - yearBeginTres;

     edades= (edadUno + edadDos + edadTres) /3;
     document.getElementById('edad1').innerText = 'edad:' + edadUno;
     document.getElementById('edad2').innerText = 'edad:' + edadDos;
     document.getElementById('edad3').innerText = 'edad:' + edadTres;
     document.getElementById('respuesta').innerText = 'promedio:' + respuesta;
   
     

      return false
    }