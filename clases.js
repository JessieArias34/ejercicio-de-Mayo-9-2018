"use strict"
function negocio(){
class Ristorante{

   constructor(){
    
   this.nombre="hola";
   this.direccion;
   this.telefono;
  }   
  
   nombre1(){
      return this.nombre;
  }
  
   nombre2(x){
      this.nombre=x;
  }

   direccion1(){
      return this.direccion;
  }

   direccion2(y){
    this.direccion=y;
  }

   telefono1(){
      return this.telefono;
  }
  
   telefono2(z){
       this.telefono=z;
  }

mostrarDatos(){
    alert(this.nombre2() +'\n'+ this.direccion2() + '\n'+ this.telefono2());
}

}

let ristorante = new Ristorante();
let nombre= prompt("Escribe el nombre del restaurante");
let direccion=prompt("Escribe la direccion");
let telefono=prompt("Escribe el telefono");
ristorante.nombre2(nombre);
ristorante.direccion2(direccion);
ristorante.telefono2(telefono);
alert(ristorante.nombre1() +'\n'+ ristorante.direccion1() + '\n'+ ristorante.telefono1());
}