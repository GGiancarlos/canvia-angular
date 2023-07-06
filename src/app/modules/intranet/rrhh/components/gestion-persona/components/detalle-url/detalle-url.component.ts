import { Component, OnInit } from '@angular/core';
import {stringFormatDDMMYYYY, trim} from "../../../../../../../utils/utilitarios";
import {GestionPersonaService} from "../../../../../../../services/gestion-persona.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonaModel} from "../../../../../../../models/persona.model";

@Component({
  selector: 'app-detalle-url',
  templateUrl: './detalle-url.component.html',
  styleUrls: ['./detalle-url.component.css']
})
export class DetalleUrlComponent implements OnInit {

  persona: PersonaModel = new PersonaModel();
  id: string = '';

  constructor(private router: Router,
              private rutaActiva: ActivatedRoute,
              private gestionPersonaService: GestionPersonaService) {

    const navigation = this.router.getCurrentNavigation();

    this.id = trim(this.rutaActiva.snapshot.params['id']);

    if (this.id != '') {
      this.obtenerDatosPorId(Number(this.id));
    }

  }

  ngOnInit() {
  }

  eventoBtnRegresar(){
    this.router.navigate(['/rrhh/gestion-persona']);
  }

  obtenerDatosPorId(id: number){

    this.gestionPersonaService.obtenerPersonaPorId(id).subscribe(
      result => {
        this.persona = result;
        // @ts-ignore
        this.persona.fechaNacimiento = stringFormatDDMMYYYY(this.persona.fechaNacimiento);
      },
      error => {
        console.log('Hubo errores ==>', error);
      }
    );
  }

}
