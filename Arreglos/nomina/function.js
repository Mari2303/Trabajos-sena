function salario(pvalorDia,pdiasTrabajados){
    let valorDia=pvalorDia
    let diasTrabajado=pdiasTrabajados
    let resultado=valorDia*diasTrabajado
    return resultado;
}



function subsidioTrasn(pvalorDia,pdiasTrabajados) {
    let subsidioTrasn;
    salarioPersona=salario(pvalorDia,pdiasTrabajados);
    salariMinimo=1300000;
    if(salarioPersona<2*salariMinimo){
        subsidioTrasn=114.000;
    }
       else{subsidioTrasn=0}
    
    return subsidioTrasn
}


function salud(pvalorDia,pdiasTrabajados){
    let saludPersona
    let salarioPersona=salario(pvalorDia,pdiasTrabajados);
    saludPersona=salarioPersona* 0.12;
    return saludPersona;
}



function pension(pvalorDia,pdiasTrabajados){
    let pensiones
    let saludPersona=salario(pvalorDia,pdiasTrabajados);
    pensiones=salarioPersona* 0.16;
    return pensiones

}

function arl(pvalorDia,pdiasTrabajados){
    let arlk
    let salarioPersona=salario(pvalorDia,pdiasTrabajados);
    arlk=salarioPersona* 0.052
    return arlk
}

const renta=function(pvalorDia,pdiasTrabajados){
    let rentas
    let salarioPersona=salario(pvalorDia,pdiasTrabajados);
    let salarioMinimo= 1300000;
    if (salarioPersona>4*salarioMinimo){
       rentas=0.04 * salarioPersona;
    }
        else{ rentas=0}
    
    return rentas;
}

    

function extra(pvalorDia,pdiasTrabajados) {
        let edad; 
       let extrac=0;
        if(edad=>40 && edad < 60){
            extrac = salarioPersona * 0.06;
        }
        else if (edad >=60){
            extrac = salarioPersona*0.08;
        }
        return extrac;
    }


function deducible(pvalorDia,pdiasTrabajados){
    let descuento 
    let dSalud=salud(pvalorDia,pdiasTrabajados);
    let dPension=pension(pvalorDia,pension);
    let dArl=arl(pvalorDia,pdiasTrabajados);
    let dReta=renta(pvalorDia,pdiasTrabajados);
    descuento=dSalud+dPension+dArl+dReta;
    return descuento;

}

function pagoTotal(pvalorDia,pdiasTrabajados){
    let psalarioPersona=salario(pvalorDia,pdiasTrabajados);
    let pextra = extra(pvalorDia,pdiasTrabajados);
    let psubTrans=subsidioTrasn(pvalorDia,pdiasTrabajados);
    let pdeducible=deducible(pvalorDia,pdiasTrabajados);
    let pago;
    pago=(psalarioPersona+psubTrans+pextra)-pdeducible;
    return pago;
    }

    