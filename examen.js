function verificar() {
var capacidadFormulario= document.formulario.capacidad.value;
var espacioLibreFormulario= document.formulario.libre.value;
var archivoFormulario= document.formulario.tarchivo.value;
var listaCapacidad= document.formulario.opcCap.value;
var listaArchivo= document.formulario.opcArc.value;
var capacidad;
var espacio;
var archivo;
var resultado;

if(listaCapacidad==1){
  capacidad= capacidadFormulario;
}if(listaCapacidad==2){
  capacidad= capacidadFormulario*1024;
}if(listaCapacidad==3){
  capacidad= (((capacidadFormulario*1024)/1)*1024)/1;
}

espacio= (capacidad*espacioLibreFormulario)/100;

if(listaArchivo==1){
  archivo= archivoFormulario;
}if(listaArchivo==2){
  archivo= archivoFormulario*1024;
}if(listaArchivo==3){
  archivo= (((archivoFormulario*1024)/1)*1024)/1;
}

resultado=(capacidad-espacio)-archivo;
(resultado<0)? alert("no hay espacio"):alert("si hay espacio "+resultado);



}


function limpiar()
{
document.getElementsByName("formulario").reset();


}
