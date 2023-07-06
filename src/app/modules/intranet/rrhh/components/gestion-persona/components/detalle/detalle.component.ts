import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PersonaModel} from "../../../../../../../models/persona.model";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  /* Inicio declaracion */
  @Input() persona: PersonaModel = new PersonaModel();
  @Output() eventoBtnVerDetalleModal: EventEmitter<any> = new EventEmitter();
  /* Fin declaracion */

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
