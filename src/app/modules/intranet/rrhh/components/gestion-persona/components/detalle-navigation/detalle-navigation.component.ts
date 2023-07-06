import { Component, OnInit } from '@angular/core';
import {isNotEmpty} from "../../../../../../../utils/utilitarios";
import {Router} from "@angular/router";
import {PersonaModel} from "../../../../../../../models/persona.model";

@Component({
  selector: 'app-detalle-navigation',
  templateUrl: './detalle-navigation.component.html',
  styleUrls: ['./detalle-navigation.component.css']
})
export class DetalleNavigationComponent implements OnInit {

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
    this.router.navigateByUrl('rrhh/gestion-persona');
  }

}
