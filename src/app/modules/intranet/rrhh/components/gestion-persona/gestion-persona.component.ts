import {Component, OnInit} from '@angular/core';
import {GestionPersonaService} from "../../../../../services/gestion-persona.service";
import {Constantes} from "../../../../../utils/constantes";
import {PersonaModel} from "../../../../../models/persona.model";
import {MensajeAlertaModel} from 'src/app/models/mensajeAlerta.model';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {NavigationExtras, Router} from "@angular/router";
import {
  GUARDARFILTRO,
  GUARDARKEYFILTRO, isEmpty,
  stringFormatDDMMYYYY,
  stringFormatYYYYMMDD, toNumber,
  trim
} from "../../../../../utils/utilitarios";
import {DetalleComponent} from "./components/detalle/detalle.component";
import {MensajesExcepciones} from "../../../../../utils/mensajes-excepciones";
import {UtilService} from "../../../../../services/shared/util.service";

@Component({
  selector: 'app-gestion-persona',
  templateUrl: './gestion-persona.component.html',
  styleUrls: ['./gestion-persona.component.css']
})
export class GestionPersonaComponent implements OnInit {

  /* Inicio declaracion */
  personas: PersonaModel[] = [];
  personaEditar: string = '';
  formaPersona: FormGroup;

  listSexos: string[] = Constantes.LISTA_SEXOS;
  listGustos: string[] = Constantes.LISTA_GUSTOS;
  listCargos: string[] = Constantes.LISTA_CARGOS;

  // @ts-ignore
  mensajeAlerta: MensajeAlertaModel;
  state: any;

  /* Fin declaracion */
  constructor(private modalService: NgbModal,
              private configModal: NgbModalConfig,
              private gestionPersonaService: GestionPersonaService,
              private utilService: UtilService,
              private router: Router) {

    configModal.backdrop = 'static';
    configModal.keyboard = false;

    this.formaPersona = new FormGroup(
      {
        "dni": new FormControl('', Validators.required),
        "nombre": new FormControl('', Validators.required),
        "apellido": new FormControl('', Validators.required),
        "edad": new FormControl('', Validators.required),
        "sexo": new FormControl('', Validators.required),
        "fechaNacimiento": new FormControl('', Validators.required),
        "celular": new FormControl('', Validators.required),
        "gustos": new FormControl('', Validators.required),
        "notas": new FormControl('', Validators.required),
        "cargos": new FormControl('', Validators.required)
      }
    );

  }

  ngOnInit(): void {
    // this.obtenerPersonas();
    // this.obtenerPersonaPorId(2);
    // this.insertarPersona();

    GUARDARKEYFILTRO(Constantes.LS_GESTION_PERSONA);
    this.obtenerDatos();
  }

  obtenerPersonas() {
    this.gestionPersonaService.obtenerPersonas().subscribe(rsp => {
      console.log(rsp);
    });
  }

  obtenerPersonaPorId(id: number) {
    this.gestionPersonaService.obtenerPersonaPorId(id).subscribe(rsp => {
      console.log("persona por id", rsp);
    });
  }

  insertarPersona() {
    const persona = {
      dni: "12345678",
      nombre: "Giancarlos",
      apellido: "Gutierrez",
      edad: 31,
      sexo: "Masculino",
      fechaNacimiento: "1992-08-12",
      celular: "947680945",
      gustos: "Bailar",
      notas: 20,
      cargos: "Analista Programador"
    }

    this.gestionPersonaService.insertarPersona(persona).subscribe(p => {
      console.log("persona insertada", p);
    });
  }


  /* Inicio metodos componente */
  eventoBtnNuevo() {
    this.personaEditar = '';

    this.formaPersona.reset();

    this.dni.setValue('');
    this.nombre.setValue('');
    this.apellido.setValue('');
    this.edad.setValue('');
    this.sexo.setValue('');
    this.fechaNacimiento.setValue('');
    this.celular.setValue('');
    this.gustos.setValue('');
    this.notas.setValue('');
    this.cargos.setValue('');
  }

  eventoBtnGuardar() {
    this.guardar();
  }

  eventoBtnVerDetalleModal(persona: PersonaModel) {
    const modalRef = this.modalService.open(DetalleComponent, {size: 'lg'});
    modalRef.componentInstance.persona = persona;
    modalRef.componentInstance.eventoBtnVerDetalleModal.subscribe(
      (result: any) => {
        //Evento a ejecutar
      }
    );
  }

  eventoBtnVerDetalleUrl(persona: PersonaModel) {
    this.router.navigate(['/rrhh/gestion-persona/detalle-url', persona.id]);
  }

  eventoBtnVerDetalleLocalStorage(persona: PersonaModel) {
    GUARDARFILTRO(persona);

    this.router.navigateByUrl('rrhh/gestion-persona/detalle-localstorage');
  }

  eventoBtnVerDetalleNavegacion(persona: PersonaModel) {
    let navigationExtras: NavigationExtras = {
      state: {
        persona: persona
      }
    };

    this.router.navigateByUrl('rrhh/gestion-persona/detalle-navigation', navigationExtras);
  }

  eventoBtnEditar(id: number) {
    this.obtenerDatosPorId(id);
  }

  eventoBtnEliminar(id: number) {
    this.eliminarPorId(id);
  }

  /* Fin metodos componente */

  /* Inicio metodos Web Service */
  obtenerDatos() {
    this.personas = [];

    this.gestionPersonaService.obtenerPersonas().subscribe(
      result => {
        this.personas = result;
        this.personas.map(p => { // @ts-ignore
          p.fechaNacimiento = stringFormatDDMMYYYY(p.fechaNacimiento)
        });
      },
      error => {
        console.log('Hubo errores ==>', error);
      }
    );
  }

  obtenerDatosPorId(id: number) {

    this.gestionPersonaService.obtenerPersonaPorId(id).subscribe(
      result => {
        this.personaEditar = trim(result.id);

        this.dni.setValue(result.dni);
        this.nombre.setValue(result.nombre);
        this.apellido.setValue(result.apellido);
        this.edad.setValue(result.edad);
        this.sexo.setValue(result.sexo);
        // @ts-ignore
        this.fechaNacimiento.setValue(stringFormatDDMMYYYY(result.fechaNacimiento));
        this.celular.setValue(result.celular);
        this.gustos.setValue(result.gustos);
        this.notas.setValue(result.notas);
        this.cargos.setValue(result.cargos);
      },
      error => {
        console.log('Hubo errores ==>', error);
        this.mensajeAlerta = new MensajeAlertaModel(MensajesExcepciones.MENSAJE_INFORMATIVO_SIN_OBTENER_RESULTADO, MensajeAlertaModel.DANGER);
      }
    );
  }

  guardar() {

    if (this.formaPersona.valid) {

      let persona: PersonaModel = new PersonaModel();

      persona.dni = trim(this.dni.value);
      persona.nombre = trim(this.nombre.value);
      persona.apellido = trim(this.apellido.value);
      persona.edad = toNumber(this.edad.value);
      persona.sexo = trim(this.sexo.value);
      persona.fechaNacimiento = stringFormatYYYYMMDD(trim(this.fechaNacimiento.value));
      persona.celular = trim(this.celular.value);
      persona.gustos = trim(this.gustos.value);
      persona.notas = toNumber(this.notas.value);
      persona.cargos = trim(this.cargos.value);

      if (isEmpty(this.personaEditar)) {

        this.utilService.modalConfirmacion(Constantes.MODAL_TITULO, Constantes.MODAL_MENSAJE_GUARDAR, Constantes.MODAL_PRIMARY, () => {

          persona.id = 0;

          this.gestionPersonaService.insertarPersona(persona).subscribe(
            result => {
              this.mensajeAlerta = new MensajeAlertaModel(MensajesExcepciones.CUS01_EXCP_001, MensajeAlertaModel.SUCCESS);
              this.obtenerDatos();
              this.eventoBtnNuevo();
            },
            error => {
              console.log('Hubo errores ==>', error);
              this.mensajeAlerta = new MensajeAlertaModel(MensajesExcepciones.MENSAJE_INFORMATIVO_DATOS_NO_GUARDADOS, MensajeAlertaModel.DANGER);
            }
          );

        });

      } else {

        this.utilService.modalConfirmacion(Constantes.MODAL_TITULO, Constantes.MODAL_MENSAJE_ACTUALIZAR, Constantes.MODAL_PRIMARY, () => {

          persona.id = toNumber(this.personaEditar);

          this.gestionPersonaService.actualizarPersona(persona).subscribe(
            result => {
              this.mensajeAlerta = new MensajeAlertaModel(MensajesExcepciones.CUS01_EXCP_002, MensajeAlertaModel.SUCCESS);
              this.obtenerDatos();
              this.eventoBtnNuevo();
            },
            error => {
              console.log('Hubo errores ==>', error);
              this.mensajeAlerta = new MensajeAlertaModel(MensajesExcepciones.MENSAJE_INFORMATIVO_DATOS_NO_ACTUALIZADOS, MensajeAlertaModel.DANGER);
            }
          );

        });

      }

    } else {
      this.formaPersona.markAllAsTouched();
      this.mensajeAlerta = new MensajeAlertaModel(MensajesExcepciones.MENSAJE_CAMPOS_OBLIGATORIOS, MensajeAlertaModel.DANGER);
    }

  }

  eliminarPorId(id: number) {

    this.utilService.modalConfirmacion(Constantes.MODAL_TITULO, Constantes.MODAL_MENSAJE_ELIMINAR, Constantes.MODAL_PRIMARY, () => {

      this.gestionPersonaService.eliminarPersona(id).subscribe(
        result => {
          this.mensajeAlerta = new MensajeAlertaModel(MensajesExcepciones.CUS01_EXCP_003, MensajeAlertaModel.SUCCESS);
          this.obtenerDatos();
          this.eventoBtnNuevo();
        },
        error => {
          console.log('Hubo errores ==>', error);
          this.mensajeAlerta = new MensajeAlertaModel(MensajesExcepciones.MENSAJE_INFORMATIVO_DATOS_NO_ELIMINADOS, MensajeAlertaModel.DANGER);
        }
      );

    });

  }

  /* Fin metodos Web Service */

  /* Inicio metodos Otros */
  get dni() {
    return this.formaPersona.get('dni') as FormControl;
  }

  get nombre() {
    return this.formaPersona.get('nombre') as FormControl;
  }

  get apellido() {
    return this.formaPersona.get('apellido') as FormControl;
  }

  get edad() {
    return this.formaPersona.get('edad') as FormControl;
  }

  get sexo() {
    return this.formaPersona.get('sexo') as FormControl;
  }

  get fechaNacimiento() {
    return this.formaPersona.get('fechaNacimiento') as FormControl;
  }

  get celular() {
    return this.formaPersona.get('celular') as FormControl;
  }

  get gustos() {
    return this.formaPersona.get('gustos') as FormControl;
  }

  get notas() {
    return this.formaPersona.get('notas') as FormControl;
  }

  get cargos() {
    return this.formaPersona.get('cargos') as FormControl;
  }

  /* Fin metodos Otros */

}
