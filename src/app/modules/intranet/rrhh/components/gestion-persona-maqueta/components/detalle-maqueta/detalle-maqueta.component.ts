import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-detalle-maqueta',
  templateUrl: './detalle-maqueta.component.html',
  styleUrls: ['./detalle-maqueta.component.css']
})
export class DetalleMaquetaComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }


}
