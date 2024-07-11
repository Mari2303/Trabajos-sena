/**
 * función saludo
 * auto: Maria alejandra
 * fecha: 14 de junio de 2024
 */

function suma() {
    
    const numeroUno = parseFloat(document.getElementById('txtnumberUno').value);
    const numeroDos = parseFloat(document.getElementById('txtnumberDos').value);
    
    suma=numeroUno+numeroDos;
    
    document.getElementById('respuesta').innerHTML=`<strong>el total de la suma es:</strong>${suma}`;

 }

 function resta(){
   
    const numeroUno = parseFloat(document.getElementById('txtnumberUno').value);
    const numeroDos = parseFloat(document.getElementById('txtnumberDos').value);
    
    resta=numeroUno-numeroDos;

    document.getElementById('respuesta').innerHTML=`<strong>el total de la resta es:</strong>${resta}`;

 }


 function multiplicacion(){
   
    const numeroUno = parseFloat(document.getElementById('txtnumberUno').value);
    const numeroDos = parseFloat(document.getElementById('txtnumberDos').value);
    
    multiplicacion=numeroUno*numeroDos;

    document.getElementById('respuesta').innerHTML=`<strong>el total de la multiplicacion es:</strong>${multiplicacion}`;

 }


 function division(){
   
    const numeroUno = parseFloat(document.getElementById('txtnumberUno').value);
    const numeroDos = parseFloat(document.getElementById('txtnumberDos').value);
    
    division=numeroUno-numeroDos;

    document.getElementById('respuesta').innerHTML=`<strong>el total de la division es:</strong>${division}`;

 }