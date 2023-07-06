import { Component, OnInit } from '@angular/core';
import {ELIMINARFILTRO, OBTENERFILTRO} from "../../../../../../../utils/utilitarios";
import {Router} from "@angular/router";
import {PersonaModel} from "../../../../../../../models/persona.model";

@Component({
  selector: 'app-detalle-ng-model-local-storage',
  templateUrl: './detalle-ng-model-local-storage.component.html',
  styleUrls: ['./detalle-ng-model-local-storage.component.css']
})
export class DetalleNgModelLocalStorageComponent implements OnInit {

  persona: PersonaModel = new PersonaModel();

  constructor(private router: Router) {

    this.persona = OBTENERFILTRO();

  }

  ngOnInit() {
  }

  eventoBtnRegresar(){
    ELIMINARFILTRO();
    this.router.navigateByUrl('rrhh/gestion-persona-ng-model');
  }

}
