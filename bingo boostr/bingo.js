function generarCarton() {
    let tabla;
    let multiplicar;
    let tablaMulti;
    let contador = 0;
    let tablaHTML = '<table class="bingo">';
    //es para generar la tabla del dos donde se genera el numero por el que se multiplica
    for (tabla = 0; tabla < 5; tabla++) {
        tablaHTML += '<tr>';
        //es para generar la tabla del dos donde se genera el numero por el que se multiplica
        for (multiplicar = 0; multiplicar < 5; multiplicar++) {
            contador += 1;
            tablaMulti = contador * 2;// almacena la tabla del 2
            tablaHTML += '<td onclick="mostrarColumnaB(this)">' + tablaMulti + '</td>';
        }
        tablaHTML += '</tr>';
    }
    tablaHTML += '</table>';
    document.getElementById('bingo-table').innerHTML = tablaHTML;
}



// es para  generar los numeros 
//columna B


function mostrarColumnaB() {
    let tabla = document.getElementById('bingo-table');
    let filas = tabla.getElementsByTagName('tr');

    for (multiplicar = 0; multiplicar < filas.length; multiplicar++) {
        let celdaB = filas[multiplicar].getElementsByTagName('td')[0];
        celdaB.classList.add('color-b');
    }
}


// colimna I
function mostrarColumnai() {
    let tabla = document.getElementById('bingo-table');
    let filas = tabla.getElementsByTagName('tr');

    for (multiplicar = 0; multiplicar < filas.length; multiplicar++) {
        let celdai = filas[multiplicar].getElementsByTagName('td')[1];
        celdai.classList.add('color-i');
    }
} 
// columna N
function mostrarColumnaN() {
    let tabla = document.getElementById('bingo-table');
    let filas = tabla.getElementsByTagName('tr');

    for (multiplicar = 0; multiplicar < filas.length; multiplicar++) {
        let celdai = filas[multiplicar].getElementsByTagName('td')[2];
        celdai.classList.add('color-N');
    }
} 

// columna G
function mostrarColumnaG() {
    let tabla = document.getElementById('bingo-table');
    let filas = tabla.getElementsByTagName('tr');

    for (multiplicar = 0; multiplicar < filas.length; multiplicar++) {
        let celdai = filas[multiplicar].getElementsByTagName('td')[3];
        celdai.classList.add('color-G');
    }
} 

// columna O
function mostrarColumnaO() {
    let tabla = document.getElementById('bingo-table');
    let filas = tabla.getElementsByTagName('tr');

    for (multiplicar = 0; multiplicar < filas.length; multiplicar++) {
        let celdai = filas[multiplicar].getElementsByTagName('td')[4];
        celdai.classList.add('color-O');
    }
}




function resaltarColumna(indiceColumna, claseColor) {
    let tabla = document.getElementById('bingo-table');
    let filas = tabla.getElementsByTagName('tr');

    for (multiplicar = 0; multiplicar < filas.length; multiplicar++) {
        let celda = filas[multiplicar].getElementsByTagName('td')[indiceColumna];
        celda.classList.add(claseColor);
    }
}

function mostrarXGrande() {
       
        let tabla = document.querySelector('.table tbody');
        // Selecciona todas las filas de la tabla
        let rows = tabla.querySelectorAll('tr');
        let colorActualPrincipal = rows[0].querySelectorAll('td')[0].style.backgroundColor;
        let nuevoColorPrincipal = colorActualPrincipal === 'pink' ? '' : 'pink';
        let colorActualSecundaria = rows[0].querySelectorAll('td')[rows[0].querySelectorAll('td').length - 1].style.backgroundColor;
        let nuevoColorSecundaria = colorActualSecundaria === 'pink' ? '' : 'pink';
       
        for (let iteracion = 0; iteracion < rows.length; iteracion++) {
            // Selecciona todas las celdas de la fila actual
            let cells = rows[iteracion].querySelectorAll('td');
           
            cells[iteracion].style.backgroundColor = nuevoColorPrincipal;
          
            cells[cells.length - 1 - iteracion].style.backgroundColor = nuevoColorSecundaria;
        }
    }




    function mostrarxxx() {
        let tabla = document.querySelector('.table tbody');
        let rows = tabla.querySelectorAll('tr');
        let colorActualPrincipal = rows[0].querySelectorAll('td')[0].style.backgroundColor;
        let nuevoColorPrincipal = colorActualPrincipal === 'aqua' ? '' : 'aqua';
       
        for (let iteracion = 0; iteracion < rows.length; iteracion++) {
            let cells = rows[iteracion].querySelectorAll('td');
            // Colorea la celda en las tres x columna (triple x)
            cells[cells.length - 3 - iteracion].style.backgroundColor = nuevoColorPrincipal;
            cells[iteracion].style.backgroundColor = nuevoColorPrincipal;
            cells[cells.length - 1 - iteracion].style.backgroundColor = nuevoColorPrincipal;
            cells[iteracion + 2].style.backgroundColor = nuevoColorPrincipal;
            for (let iteracion = 2; iteracion < rows.length; iteracion++) {
                let cells = rows[iteracion].querySelectorAll('td');
                for (let iteracion3 = 2; iteracion3 < 5; iteracion3++) {
                    for (let iteracion4 = 2; iteracion4 < 5; iteracion4++) {
                      if (iteracion3%2==0&&iteracion4%2==1){
                        cells[iteracion-1].style.backgroundColor = nuevoColorPrincipal;
                      }else if (iteracion3%2==1&&iteracion4%2==0){
                        cells[cells.length - 1 - iteracion+1].style.backgroundColor = nuevoColorPrincipal;
                      }else{
                        console.log("")
                      }
                    }
                  } 
            }
        }
    }