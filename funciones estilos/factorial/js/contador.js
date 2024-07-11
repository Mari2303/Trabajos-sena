/**
 * función saludo
 * auto: Maria alejandra
 * fecha: 14 de junio de 2024
 */

function factorial() {
 
   let numero = 5;
   let factorial = 1;
  
   for (let contador= 1; contador <= numero; contador++) {
       factorial = factorial * contador;
   }
   document.getElementById('respuesta').innerText = `El factorial de ${numero} es: ${factorial}`;
}