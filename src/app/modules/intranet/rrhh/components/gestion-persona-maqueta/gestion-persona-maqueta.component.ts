import { Component, OnInit } from '@angular/core';
import {DetalleMaquetaComponent} from "./components/detalle-maqueta/detalle-maqueta.component";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import { Router } from '@angular/router';
import {PersonaModel} from "../../../../../models/persona.model";

@Component({
  selector: 'app-gestion-persona-maqueta',
  templateUrl: './gestion-persona-maqueta.component.html',
  styleUrls: ['./gestion-persona-maqueta.component.css']
})
export class GestionPersonaMaquetaComponent implements OnInit {

  /* Inicio declaracion */
  personas: PersonaModel[] = [];
  /* Fin declaracion */

  constructor(private modalService: NgbModal,
              private configModal: NgbModalConfig,
              private router: Router) {

    configModal.backdrop = 'static';
    configModal.keyboard = false;
  }

  ngOnInit() {
    this.personas = [
      {
        "id": 0,
        "dni": "--DATO--",
        "nombre": "--DATO--",
        "apellido": "--DATO--",
        "edad": 0,
        "sexo": "--DATO--",
        "fechaNacimiento": "--DATO--"
      }
    ];
  }

  /* Inicio metodos componente */
  eventoBtnNuevo(){

  }

  eventoBtnGuardar(){

  }

  eventoBtnVerDetalleModal(){
    const modalRef = this.modalService.open(DetalleMaquetaComponent, { size: 'lg' });
  }

  eventoBtnVerDetalleUrl(){
    let id = 0;
    this.router.navigate(['/rrhh/gestion-persona-maqueta/detalle-maqueta-url',id]);
  }

  eventoBtnVerDetalleLocalStorage(){
    this.router.navigateByUrl('rrhh/gestion-persona-maqueta/detalle-maqueta-localstorage');
  }

  eventoBtnVerDetalleNavegacion(){
    this.router.navigateByUrl('rrhh/gestion-persona-maqueta/detalle-maqueta-navigation');
  }

  eventoBtnEditar(){

  }

  eventoBtnEliminar(){

  }
  /* Fin metodos componente */

}
