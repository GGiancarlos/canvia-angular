import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {MensajeAlertaModel} from "../../../../../models/mensajeAlerta.model";

@Component({
  selector: 'app-mensaje-alerta',
  templateUrl: './mensaje-alerta.component.html',
  styleUrls: ['./mensaje-alerta.component.css']
})
export class MensajeAlertaComponent implements OnInit {

  @Input() mensajeAlerta: MensajeAlertaModel | undefined;
  timeoutId:any;
  duracion:number = 6000;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(changes:SimpleChanges): void {
    if(this.mensajeAlerta && this.mensajeAlerta.duracion){
      this.duracion = this.mensajeAlerta.duracion;
    }

    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      // @ts-ignore
      this.mensajeAlerta = null;
    }, this.duracion);
  }

  close(event:any){
    // @ts-ignore
    this.mensajeAlerta = null;
    //console.log('this.timeoutId: '+this.timeoutId);
    clearTimeout(this.timeoutId);
  }

}
