import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-detalle-maqueta-local-storage',
  templateUrl: './detalle-maqueta-local-storage.component.html',
  styleUrls: ['./detalle-maqueta-local-storage.component.css']
})
export class DetalleMaquetaLocalStorageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  eventoBtnRegresar(){
    this.router.navigateByUrl('rrhh/gestion-persona-maqueta');
  }

}
