export class MensajeAlertaModel {
  mensaje?: string;
  clase?: string;
  duracion?: number;

  static readonly SUCCESS = 'success';
  static readonly WARNING = 'warning';
  static readonly DANGER = 'danger';

  constructor(mensaje?: string, clase?: string, duracion?: number) {
    this.mensaje = mensaje;
    this.duracion = duracion;
    if (clase) {
      this.clase = clase;
    } else {
      this.clase = MensajeAlertaModel.DANGER;
    }
  }

}
