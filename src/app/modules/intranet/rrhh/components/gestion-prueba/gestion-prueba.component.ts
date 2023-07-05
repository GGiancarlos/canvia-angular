import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {
  GestionPruebaHijoModalComponent
} from "./components/gestion-prueba-hijo-modal/gestion-prueba-hijo-modal.component";
import {GestionPruebaService} from "../../../../../services/gestion-prueba.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-gestion-prueba',
  templateUrl: './gestion-prueba.component.html',
  styleUrls: ['./gestion-prueba.component.css']
})
export class GestionPruebaComponent implements OnInit {

  esValido: boolean = true;
  personas: any = [
    {"id": "1", "nombre": "Nombre 1", "pais": "PE"},
    {"id": "2", "nombre": "Nombre 2", "pais": "CO"},
    {"id": "3", "nombre": "Nombre 3", "pais": "PE"},
    {"id": "4", "nombre": "Nombre 4", "pais": ""}
  ];

  //D24
  textoInterporlacionString: string = "Interpolación de String - Hola Mundo";
  tamanioCajaTextoBindingPropiedad: number = 10;
  placeholderCajaTextoBindingPropiedad: string = "Escribir texto Binding Propiedad";

  //D27
  textoUpperCasePipe: string = "pipes en angular";
  fecha: Date = new Date();

  //D32
  /* Formularios NgModel */
  nombreUsuarioNgModel: string = '';

  usuario: any = {
    "id": "1",
    "nombre": "Luisin Maza"
  };

  //D33
  /* Formularios Reactivos FormGroup */
  formaPersona: FormGroup;

  formaPersonaBuilder: FormGroup;

  constructor(private modalService: NgbModal,
              private configModal: NgbModalConfig,
              private gestionPruebaService: GestionPruebaService,
              private router: Router,
              public fb: FormBuilder) {
    console.log("Constructor");
    //D25
    configModal.backdrop = 'static';
    configModal.keyboard = false;

    //D33
    this.formaPersona = new FormGroup(
      {
        "nombre": new FormControl('', [Validators.required, Validators.maxLength(20)]),
        "apellido": new FormControl('', [Validators.required, Validators.maxLength(20)]),
      }
    );

    this.formaPersonaBuilder = this.fb.group(
      {
        "nombre": ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnDestroy() {
    console.log("ngOnInit");
  }


  //D24
  eventoBtnBindingEvento() {
    alert("Evento Boton");
  }

  eventoInputBindingEvento(event: any) {
    console.log("Imprimir texto: ", event.target.value);
  }

  //D25
  eventoBtnInputOutput(mensaje: string) {
    alert(mensaje);
  }

  eventoBtnInputOutputModal() {
    const modalRef = this.modalService.open(GestionPruebaHijoModalComponent, {size: 'lg'});
    modalRef.componentInstance.tituloComponenteHijo = "COMPONENTE PRUEBA HIJO (MODAL)";
    modalRef.componentInstance.nombreComponenteHijo = "Hola Mundo (Modal)";
    modalRef.componentInstance.eventoEventEmitterOutput.subscribe(
      (result: any) => {
        alert(result);
      }
    );
  }

  //D26
  eventoBtnProcesarServicioSinParametro() {
    this.gestionPruebaService.getMiPrimerServicioSinParametro();
  }

  eventoBtnProcesarServicioConParametro() {
    this.gestionPruebaService.getMiPrimerServicioConParametro("Hola Mundo");
  }

  //D30
  eventoBtnIrAOtraVista() {
    this.router.navigate(['/rrhh/gestion-persona']);
  }


  //D32
  eventoBtnValidarNgModel(formaPersonaNgModel: any) {

    console.log("LEMA", formaPersonaNgModel);

    if (formaPersonaNgModel.form.valid) {
      alert('OK: ' + formaPersonaNgModel.value.nombreUsuario)
    } else {
      formaPersonaNgModel.form.markAllAsTouched();
      alert('Mensaje: Completar campos obligatorios');
    }

  }

  //D33
  eventoBtnValidar(){

    if (this.formaPersona.valid){
      alert('OK: ' + this.formaPersona.get('nombre')?.value)
    }else{
      this.formaPersona.markAllAsTouched();
      alert('Mensaje: Completar campos obligatorios');
    }

  }

  eventoBtnValidarBuilder(){

    if (this.formaPersonaBuilder.valid){
      alert('OK: ' + this.formaPersonaBuilder.get('nombre')?.value)
    }else{
      this.formaPersonaBuilder.markAllAsTouched();
      alert('Mensaje: Completar campos obligatorios');
    }

  }
}
