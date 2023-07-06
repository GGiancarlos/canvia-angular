import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-detalle-maqueta-url',
  templateUrl: './detalle-maqueta-url.component.html',
  styleUrls: ['./detalle-maqueta-url.component.css']
})
export class DetalleMaquetaUrlComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  eventoBtnRegresar(){
    this.router.navigate(['/rrhh/gestion-persona-maqueta']);
  }


}
