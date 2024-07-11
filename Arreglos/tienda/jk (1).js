/**
 * crear una tienda usando js usando arrelos de nombre:valor 
 * autor:maria
 * 4 de mayo de 2024
 */
let tienda=[];
let interacion;
let sumar=0;
let descuento;

tienda=[
    {id:1,nombreProducto:'Arroz', tipoProducto:'granos',TipoUnida:'gramos', unidad:'1000', precio: 2400},
    {id:2,nombreProducto:'lentejas', tipoProducto:'granos',TipoUnida:'gramos', unidad:'500', precio:1300},
    {id:3,nombreProducto:'carnes', tipoProducto:'carnes',TipoUnida:'gramos', unidad:'500', precio:13500},
    {id:4,nombreProducto:'pollo entero', tipoProducto:'carnes',TipoUnida:'gramos', unidad:'1000', precio:12500},
    {id:5,nombreProducto:'cebolla larga', tipoProducto:'verduras',TipoUnida:'gramos', unidad:'500', precio:12500},
    {id:6,nombreProducto:'mora', tipoProducto:'fruta',TipoUnida:'gramos', unidad:'500', precio:1200},
      ]
//crear un registro
tienda.push({id:7,nombrePreoducto:'lulo',tipoProducto:'fruta',tipoUnidad:'gramos',unidad:500,precio:1600});
tienda.push({id:8,nombreProducto:'papa',tipoProducto:'verdura',tipoUnidad:'gramos',unidad:500,precio:1200})

//tienda[7].precio=2600;

longitudArreglo = tienda.length
for(interacion=0; interacion<8; interacion++){
if(tienda[interacion].id==7){
    tienda[interacion].precio=2600;
}
else{
    console.log("no existe el producto")
}
if(tienda[interacion].tipoProducto=='carnes'){
    tienda[interacion].precio=21600;
}
else{
    console.log("no existe el producto")
}
sumar = sumar + tienda[interacion].precio

if(tienda[interacion].tipoProducto=='frutas'){
    descuento=descuentos(tienda[interacion].precio);
}
else{
    descuento=0;
}
console.log(descuento);
}

console.log(tienda);
console.log("suma de todos los producto");
console.log(sumar);