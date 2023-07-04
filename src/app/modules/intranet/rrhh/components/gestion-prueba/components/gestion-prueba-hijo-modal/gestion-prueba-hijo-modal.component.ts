import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-gestion-prueba-hijo-modal',
  templateUrl: './gestion-prueba-hijo-modal.component.html',
  styleUrls: ['./gestion-prueba-hijo-modal.component.css']
})
export class GestionPruebaHijoModalComponent implements OnInit {

  @Input() tituloComponenteHijo: string = "";
  @Input() nombreComponenteHijo: string = "";
  @Output() eventoEventEmitterOutput = new EventEmitter<string>();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  eventoBtnSalidaDesdeComponenteHijo(){
    this.eventoEventEmitterOutput.emit('Mensaje de salida es: ' + this.nombreComponenteHijo);
    this.activeModal.close();
  }


}
