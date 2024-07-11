/**
 * función saludo
 * auto: Maria alejandra
 * fecha: 14 de junio de 2024
 */

function contar() {
   let resultado = '';
   let limite = 5;
  
   for (let contador= 1; contador <= limite; contador++) {
       resultado += contador + ' ';
   }
   document.getElementById('respuesta').innerText = resultado.trim();
}