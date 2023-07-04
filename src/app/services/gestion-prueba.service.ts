import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionPruebaService {

  //D26
  constructor() {
    console.log("Hola estoy en el servicio");
  }

  getMiPrimerServicioSinParametro(){
    console.log("Hola Mundo - Sin parametro");
  }

  getMiPrimerServicioConParametro(descripcion: string){
    console.log(descripcion + " - Con parametro");
  }

}
