import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {
  GestionPruebaHijoModalComponent
} from "./components/gestion-prueba-hijo-modal/gestion-prueba-hijo-modal.component";
import {GestionPruebaService} from "../../../../../services/gestion-prueba.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {from, Observable, Subject} from "rxjs";

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

    //D42
    this.rxjsObservables();
    // this.asyncAwaitFuncion();
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

  //D42
  rxjsObservables(){

    let listaPersonas: any[] = [];

    //////Crear Observable (Unicast) (1)
    const obs = new Observable<any>( subs =>{

      let personas: any[] = [
        {"id": "1", "nombre": "Luisin", "apellido": "Maza", "edad": 32},
        {"id": "2", "nombre": "Juan", "apellido": "Gomez", "edad": 25},
        {"id": "3", "nombre": "Miguel", "apellido": "Perez", "edad": 16},
        {"id": "4", "nombre": "Gabriel", "apellido": "Herrera", "edad": 22}
      ];

      subs.next(personas);
      subs.complete();
    })
      .pipe(
        //tap(t => console.log('Impresion 1: ', t)),
        /* map(p => p.map(x => {
          x.edad = x.edad * 2;
          return {...x, "nacionalidad": "Peruana"};
        })), */
        //tap(t => console.log('Impresion 2: ', t)),
        //map(p => p.map(x => x).filter(f => f.edad >= 50)),
        //tap(t => console.log('Impresion 3: ', t))
      );

    //Suscribirnos al Observable
    const subs1 = obs.subscribe(
      result => {
        //console.log(result);
        listaPersonas = result;
      },
      error => {
        console.log('Hubo errores ==>', error);
      },
      () => {
        console.log('Completado');
      }
    );

    //////Cancelar la subscripcion
    subs1.unsubscribe();

    console.log('Lista de Personas: ', listaPersonas);

    //////Crear Observer
    /* const observer: Observer<any> = {
      next: result => {
        console.log(result);
      },
      error: error => {
        console.log('Hubo errores ==>', error);
      },
      complete: () => {
        console.log('Completado');
      }
    } */

    //Suscribirnos al Observable, otra forma
    //const subs2 = obs.subscribe( observer );

    //////Cancelar la subscripcion
    //subs2.unsubscribe();



    //////Crear Observable (2)
    let listaUsuarios: any = [];

    let usuarios: any[] = [
      {"id": "1", "user": "Luisin", "password": "123", "edad": 32},
      {"id": "2", "user": "Juan", "password": "123456", "edad": 25},
      {"id": "3", "user": "Miguel", "password": "aaa123", "edad": 16},
      {"id": "4", "user": "Gabriel", "password": "bbb123", "edad": 22}
    ];

    let usuarios1: any[] = [
      {"id": "1", "user": "Luisin", "password": "123", "edad": 32},
      {"id": "2", "user": "Juan", "password": "123456", "edad": 25}
    ];

    let usuarios2: any[] = [
      {"id": "3", "user": "Miguel", "password": "aaa123", "edad": 16},
      {"id": "4", "user": "Gabriel", "password": "bbb123", "edad": 22}
    ];

    const obsFrom = from(usuarios).pipe(
      //filter(u => u.edad > 23)
      //first(u => u.edad == 25)
      //find(u => u.edad == 25)
      //count(u => u.edad > 23)
    );

    /* const obsFrom = from([usuarios1, usuarios2]).pipe(
      take(1)
    ); */

    //Suscribirnos al Observable
    const subs3 = obsFrom.subscribe(
      result => {
        //console.log(result);
        listaUsuarios = listaUsuarios.concat(result)
      },
      error => {
        console.log('Hubo errores ==>', error);
      },
      () => {
        console.log('Completado');
      }
    );

    //Cancelar la subscripcion
    subs3.unsubscribe();

    console.log('Lista de Usuarios: ', listaUsuarios);



    //////Crear Subject (Multicast)
    const subject = new Subject();

    subject.subscribe({
      next: result => {
        console.log('Observer A: ', result);
      },
      error: error => {
        console.log('Hubo errores ==>', error);
      },
      complete: () => {
        console.log('Completado');
      }
    });

    subject.subscribe({
      next: result => {
        console.log('Observer B: ', result);
      },
      error: error => {
        console.log('Hubo errores ==>', error);
      },
      complete: () => {
        console.log('Completado');
      }
    });

    subject.next({"id": "1", "nombre": "Luisin", "apellido": "Maza", "edad": 32});
    subject.next({"id": "2", "nombre": "Juan", "apellido": "Gomez", "edad": 25});

  }

  //////async await
  async asyncAwaitFuncion(){

    let codigo: any = 0;

    //codigo = await this.primeraFuncion().toPromise();
    //codigo = await this.promesaFuncion();

    codigo = this.primeraFuncion().toPromise();

    this.segundaFuncion(codigo);
    this.terceraFuncion();
  }

  promesaFuncion(): Promise<number> {
    return new Promise(resolve => {

      setTimeout(() => {
        console.log('Primera Función Promesa');
        resolve(1);
      }, 2000);

    });
  }

  primeraFuncion(): Observable<any>{
    const obs = new Observable<number>( subs =>{

      setTimeout(() => {
        console.log('Primera Función Observable');
        subs.next(1);
        subs.complete();
      }, 2000);

    });

    return obs;
  }

  segundaFuncion(codigo: number){
    setTimeout(() => {
      console.log('Segunda Función', codigo);
    }, 1000);
  }

  terceraFuncion(){
    console.log('Tercera Función');
  }
}
