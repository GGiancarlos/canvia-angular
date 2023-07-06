import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {isNotEmpty} from "../../../../../../../utils/utilitarios";
import {PersonaModel} from "../../../../../../../models/persona.model";

@Component({
  selector: 'app-detalle-ng-model-navigation',
  templateUrl: './detalle-ng-model-navigation.component.html',
  styleUrls: ['./detalle-ng-model-navigation.component.css']
})
export class DetalleNgModelNavigationComponent implements OnInit {

  persona: PersonaModel = new PersonaModel();
  state: any;

  constructor(private router: Router) {

    const navigation = this.router.getCurrentNavigation();

    // @ts-ignore
    if(isNotEmpty(navigation.extras.state)){
      // @ts-ignore
      this.state = navigation.extras.state as {
        persona: PersonaModel
      };

      this.persona = this.state.persona;
    }

  }

  ngOnInit() {
  }

  eventoBtnRegresar(){
    this.router.navigateByUrl('rrhh/gestion-persona-ng-model');
  }

}
