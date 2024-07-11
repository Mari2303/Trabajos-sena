
/*
 fecha: 9-05-2024
 Autor: Maria Alejandra Marin Henriquez
*/
let nomina=[];
let psubsidioTrasn;
let interacion;
let salarioPersona;
let ppension;
let pvalorDias;
let pdiasTrabajado;
let saludPer;
let perArl;
let peRenta;
let perExtra;
let perDeducible;
let perPagoTotal;
let totalPagar=[];
let suma=0;

nomina=[
    {id:1, numeroDocumento:1080427305,nombre:'maria',apellido:'marin',edad:17,valorDia:130000,diasTrabajados:10},
    {id:2, numeroDocumento:1077722422,nombre:'catalina',apellido:'cometa',edad:18,valorDia:30000,diasTrabajados:5},
    {id:3, numeroDocumento:1138274089,nombre:'daniel',apellido:'trujillo',edad:18,valorDia:20000,diasTrabajados:25},
    {id:4, numeroDocumento:1076906609,nombre:'Diego ',apellido:' Castaño',edad:17,valorDia:10000,diasTrabajados:50},
    {id:5, numeroDocumento:1032679504,nombre:'july',apellido:'peña',edad:17,valorDia:100000,diasTrabajados:10},
    {id:6, numeroDocumento:1075235870,nombre:'brayan',apellido:'perdomo',edad:17,valorDia:45000,diasTrabajados:25},
    {id:7, numeroDocumento:1080292258,nombre:'milciades',apellido:'leal',edad:17,valorDia:50000,diasTrabajados:30}
    
]
 console.log(nomina);


for(interacion=0; interacion<7; interacion++){
pvalorDias=nomina[interacion].valorDia;
pdiasTrabajado=nomina[interacion].diasTrabajados;
salarioPersona=salario(pvalorDias,pdiasTrabajado);
saludPer=salud(pvalorDias,pdiasTrabajado);
ppension=pension(pvalorDias,pdiasTrabajado);
psubsidioTrasn = subsidioTrasn(pvalorDias,pdiasTrabajado);
perArl = arl(pvalorDias,pdiasTrabajado);
peRenta = renta(pvalorDias,pdiasTrabajado);
perExtra = extra(pvalorDias,pdiasTrabajado);
perPagoTotal = pagoTotal(pvalorDias,pdiasTrabajado);

totalPagar.push({id:nomina[interacion].id,numeroDocumento:nomina[interacion].numeroDocumento ,nombre:
    nomina[interacion].nombre,apellido:nomina[interacion].apellido,
    edad:nomina[interacion].edad,valorp:pvalorDias,diasTrabajadosp:pdiasTrabajado,psalarioPersona:salarioPersona,
    psalud:saludPer,pensionPer:ppension,subsidioTrasnPer:psubsidioTrasn,arlp:perArl,renta:peRenta,
    extraP:perExtra,ppagoTotal:perPagoTotal})

}
console.table(totalPagar);
for(interacion=0; interacion<7; interacion++){
    suma= suma + totalPagar[interacion].ppagoTotal;
}
console.log(suma);