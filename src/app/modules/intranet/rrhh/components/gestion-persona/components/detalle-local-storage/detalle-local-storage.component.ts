import { Component, OnInit } from '@angular/core';
import {PersonaModel} from "../../../../../../../models/persona.model";
import {Router} from "@angular/router";
import {ELIMINARFILTRO, OBTENERFILTRO} from "../../../../../../../utils/utilitarios";

@Component({
  selector: 'app-detalle-local-storage',
  templateUrl: './detalle-local-storage.component.html',
  styleUrls: ['./detalle-local-storage.component.css']
})
export class DetalleLocalStorageComponent implements OnInit {

  persona: PersonaModel = new PersonaModel();

  constructor(private router: Router) {

    this.persona = OBTENERFILTRO();

  }

  ngOnInit() {
  }

  eventoBtnRegresar(){
    ELIMINARFILTRO();
    this.router.navigateByUrl('rrhh/gestion-persona');
  }

}
