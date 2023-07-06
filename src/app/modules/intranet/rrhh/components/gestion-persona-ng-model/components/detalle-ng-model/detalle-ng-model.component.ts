import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {PersonaModel} from "../../../../../../../models/persona.model";

@Component({
  selector: 'app-detalle-ng-model',
  templateUrl: './detalle-ng-model.component.html',
  styleUrls: ['./detalle-ng-model.component.css']
})
export class DetalleNgModelComponent implements OnInit {

  /* Inicio declaracion */
  @Input() persona: PersonaModel = new PersonaModel();
  @Output() eventoBtnVerDetalleModal: EventEmitter<any> = new EventEmitter();
  /* Fin declaracion */

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
