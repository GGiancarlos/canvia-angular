import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-gestion-prueba-hijo',
  templateUrl: './gestion-prueba-hijo.component.html',
  styleUrls: ['./gestion-prueba-hijo.component.css']
})
export class GestionPruebaHijoComponent implements OnInit {

  @Input() tituloComponenteHijo: string = "";
  @Input() nombreComponenteHijo: string = "";
  @Output() eventoEventEmitterOutput = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  eventoBtnSalidaDesdeComponenteHijo(){
    this.eventoEventEmitterOutput.emit('Mensaje de salida es: ' + this.nombreComponenteHijo);
  }

}
