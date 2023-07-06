import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-detalle-maqueta-navigation',
  templateUrl: './detalle-maqueta-navigation.component.html',
  styleUrls: ['./detalle-maqueta-navigation.component.css']
})
export class DetalleMaquetaNavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  eventoBtnRegresar(){
    this.router.navigateByUrl('rrhh/gestion-persona-maqueta');
  }


}
