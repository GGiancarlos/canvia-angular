import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  texto1 = 'Aceptar'; // Positivo
  texto2 = 'Cancelar'; // Negativo
  // @ts-ignore
  @Input() public modal;
  @Input() public tipoModal = 1;
  @Input() public classModal = 'primary';
  @Output() respuesta = new EventEmitter<any>();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    // Casuística: 1:ok, 2:[Aceptar, salir], 3:[Aceptar, cancelar], 4:[Cancelar, confirmar], 5: [SI, NO]
    switch (this.tipoModal) {
      case 1:
        this.texto1 = 'Aceptar';
        break;
      case 2:
        this.texto1 = 'Aceptar';
        this.texto2 = 'Salir';
        break;
      case 3:
        this.texto1 = 'Aceptar';
        this.texto2 = 'Cancelar';
        break;
      case 4:
        this.texto1 = 'Confirmar';
        this.texto2 = 'Cancelar';
        break;
      case 5:
        this.texto1 = 'Sí';
        this.texto2 = 'No';
        break;
    }
  }

  cerrar(): void {
    this.respuesta.emit('NO');
    this.activeModal.close();
  }

  aceptar(): void {
    this.respuesta.emit('SI');
    this.activeModal.close();
  }


}
