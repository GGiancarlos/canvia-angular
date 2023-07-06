import { Component, OnInit } from '@angular/core';
import {MensajeAlertaModel} from "../../../../../models/mensajeAlerta.model";
import {MensajesExcepciones} from "../../../../../utils/mensajes-excepciones";
import {Constantes} from "../../../../../utils/constantes";
import {
  GUARDARFILTRO, GUARDARKEYFILTRO,
  isEmpty,
  stringFormatDDMMYYYY,
  stringFormatYYYYMMDD,
  toNumber,
  trim
} from "../../../../../utils/utilitarios";
import {NavigationExtras, Router} from "@angular/router";
import {PersonaModel} from "../../../../../models/persona.model";
import {DetalleNgModelComponent} from "./components/detalle-ng-model/detalle-ng-model.component";
import {UtilService} from "../../../../../services/shared/util.service";
import {GestionPersonaService} from "../../../../../services/gestion-persona.service";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-gestion-persona-ng-model',
  templateUrl: './gestion-persona-ng-model.component.html',
  styleUrls: ['./gestion-persona-ng-model.component.css']
})
export class GestionPersonaNgModelComponent implements OnInit {

  /* Inicio declaracion */
  persona: PersonaModel = new PersonaModel();
  personas: PersonaModel[] = [];
  personaEditar: string = '';

  listSexos: string[] = Constantes.LISTA_SEXOS;
  listGustos: string[] = Constantes.LISTA_GUSTOS;
  listCargos: string[] = Constantes.LISTA_CARGOS;

  // @ts-ignore
  mensajeAlerta:MensajeAlertaModel;
  state: any;
  /* Fin declaracion */

  constructor(private modalService: NgbModal,
              private configModal: NgbModalConfig,
              private gestionPersonaService: GestionPersonaService,
              private utilService: UtilService,
              private router: Router) {

    configModal.backdrop = 'static';
    configModal.keyboard = false;
  }

  ngOnInit() {
    GUARDARKEYFILTRO(Constantes.LS_GESTION_PERSONA);

    this.persona.sexo = "";
    this.persona.gustos = "";
    this.persona.cargos = "";

    this.obtenerDatos();
  }

  /* Inicio metodos componente */
  eventoBtnNuevo(formaPersona:any){
    this.personaEditar = '';

    formaPersona.form.reset();
    /* formaPersona.form.controls.sexo.value = "";
    formaPersona.form.controls.gustos.value = "";
    fformaPersona.form.controls.cargos.value = ""; */

    this.persona = new PersonaModel();
    this.persona.sexo = "";
    this.persona.gustos = "";
    this.persona.cargos = "";
  }

  eventoBtnGuardar(formaPersona:any){
    this.guardar(formaPersona);
  }

  eventoBtnVerDetalleModal(persona: PersonaModel){
    const modalRef = this.modalService.open(DetalleNgModelComponent, { size: 'lg' });
    modalRef.componentInstance.persona = persona;
    modalRef.componentInstance.eventoBtnVerDetalleModal.subscribe(
      (result: any) => {
        //Evento a ejecutar
      }
    );
  }

  eventoBtnVerDetalleUrl(persona: PersonaModel){
    this.router.navigate(['/rrhh/gestion-persona-ng-model/detalle-ng-model-url', persona.id]);
  }

  eventoBtnVerDetalleLocalStorage(persona: PersonaModel){
    GUARDARFILTRO(persona);

    this.router.navigateByUrl('rrhh/gestion-persona-ng-model/detalle-ng-model-localstorage');
  }

  eventoBtnVerDetalleNavegacion(persona: PersonaModel){
    let navigationExtras: NavigationExtras = {
      state: {
        persona: persona
      }
    };

    this.router.navigateByUrl('rrhh/gestion-persona-ng-model/detalle-ng-model-navigation', navigationExtras);
  }

  eventoBtnEditar(id: number){
    this.obtenerDatosPorId(id);
  }

  eventoBtnEliminar(id: number, formaPersona:any){
    this.eliminarPorId(id, formaPersona);
  }
  /* Fin metodos componente */

  /* Inicio metodos Web Service */
  obtenerDatos(){
    this.personas = [];

    this.gestionPersonaService.obtenerPersonas().subscribe(
      result => {
        this.personas = result;
        this.personas.map(p => { // @ts-ignore
          p.fechaNacimiento = stringFormatDDMMYYYY(p.fechaNacimiento)});
      },
      error => {
        console.log('Hubo errores ==>', error);
      }
    );
  }

  obtenerDatosPorId(id: number){

    this.gestionPersonaService.obtenerPersonaPorId(id).subscribe(
      result => {
        this.personaEditar = trim(result.id);
        this.persona = result;
        // @ts-ignore
        this.persona.fechaNacimiento = stringFormatDDMMYYYY(this.persona.fechaNacimiento);
      },
      error => {
        console.log('Hubo errores ==>', error);
        this.mensajeAlerta = new MensajeAlertaModel(MensajesExcepciones.MENSAJE_INFORMATIVO_SIN_OBTENER_RESULTADO, MensajeAlertaModel.DANGER);
      }
    );
  }

  guardar(formaPersona:any){

    //console.log("LEMA", formaPersona);

    if (formaPersona.form.valid){

      if(isEmpty(this.personaEditar)){

        this.utilService.modalConfirmacion(Constantes.MODAL_TITULO,Constantes.MODAL_MENSAJE_GUARDAR,Constantes.MODAL_PRIMARY, () => {

          this.persona.id = 0;
          this.persona.fechaNacimiento = stringFormatYYYYMMDD(trim(this.persona.fechaNacimiento));

          this.gestionPersonaService.insertarPersona(this.persona).subscribe(
            result => {
              this.mensajeAlerta = new MensajeAlertaModel(MensajesExcepciones.CUS01_EXCP_001, MensajeAlertaModel.SUCCESS);
              this.obtenerDatos();
              this.eventoBtnNuevo(formaPersona);
            },
            error => {
              console.log('Hubo errores ==>', error);
              this.mensajeAlerta = new MensajeAlertaModel(MensajesExcepciones.MENSAJE_INFORMATIVO_DATOS_NO_GUARDADOS, MensajeAlertaModel.DANGER);
            }
          );

        });

      }else{

        this.utilService.modalConfirmacion(Constantes.MODAL_TITULO,Constantes.MODAL_MENSAJE_ACTUALIZAR,Constantes.MODAL_PRIMARY, () => {

          this.persona.id = toNumber(this.personaEditar);
          this.persona.fechaNacimiento = stringFormatYYYYMMDD(trim(this.persona.fechaNacimiento));

          this.gestionPersonaService.actualizarPersona(this.persona).subscribe(
            result => {
              this.mensajeAlerta = new MensajeAlertaModel(MensajesExcepciones.CUS01_EXCP_002, MensajeAlertaModel.SUCCESS);
              this.obtenerDatos();
              this.eventoBtnNuevo(formaPersona);
            },
            error => {
              console.log('Hubo errores ==>', error);
              this.mensajeAlerta = new MensajeAlertaModel(MensajesExcepciones.MENSAJE_INFORMATIVO_DATOS_NO_ACTUALIZADOS, MensajeAlertaModel.DANGER);
            }
          );

        });

      }

    }else{
      formaPersona.form.markAllAsTouched();
      //formaPersona.control.markAllAsTouched();
      this.mensajeAlerta = new MensajeAlertaModel(MensajesExcepciones.MENSAJE_CAMPOS_OBLIGATORIOS, MensajeAlertaModel.DANGER);
    }

  }

  eliminarPorId(id: number, formaPersona:any){

    this.utilService.modalConfirmacion(Constantes.MODAL_TITULO,Constantes.MODAL_MENSAJE_ELIMINAR,Constantes.MODAL_PRIMARY, () => {

      this.gestionPersonaService.eliminarPersona(id).subscribe(
        result => {
          this.mensajeAlerta = new MensajeAlertaModel(MensajesExcepciones.CUS01_EXCP_003, MensajeAlertaModel.SUCCESS);
          this.obtenerDatos();
          this.eventoBtnNuevo(formaPersona);
        },
        error => {
          console.log('Hubo errores ==>', error);
          this.mensajeAlerta = new MensajeAlertaModel(MensajesExcepciones.MENSAJE_INFORMATIVO_DATOS_NO_ELIMINADOS, MensajeAlertaModel.DANGER);
        }
      );

    });

  }
  /* Fin metodos Web Service */
}
