import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RrhhRoutingModule } from './rrhh-routing.module';
import { GestionPersonaComponent } from './components/gestion-persona/gestion-persona.component';
import { GestionPersonaNgModelComponent } from './components/gestion-persona-ng-model/gestion-persona-ng-model.component';
import { GestionPersonaMaquetaComponent } from './components/gestion-persona-maqueta/gestion-persona-maqueta.component';
import { DetalleComponent } from './components/gestion-persona/components/detalle/detalle.component';
import { DetalleLocalStorageComponent } from './components/gestion-persona/components/detalle-local-storage/detalle-local-storage.component';
import { DetalleNavigationComponent } from './components/gestion-persona/components/detalle-navigation/detalle-navigation.component';
import { DetalleUrlComponent } from './components/gestion-persona/components/detalle-url/detalle-url.component';
import { DetalleNgModelComponent } from './components/gestion-persona-ng-model/components/detalle-ng-model/detalle-ng-model.component';
import { DetalleNgModelLocalStorageComponent } from './components/gestion-persona-ng-model/components/detalle-ng-model-local-storage/detalle-ng-model-local-storage.component';
import { DetalleNgModelNavigationComponent } from './components/gestion-persona-ng-model/components/detalle-ng-model-navigation/detalle-ng-model-navigation.component';
import { DetalleNgModelUrlComponent } from './components/gestion-persona-ng-model/components/detalle-ng-model-url/detalle-ng-model-url.component';
import { DetalleMaquetaComponent } from './components/gestion-persona-maqueta/components/detalle-maqueta/detalle-maqueta.component';
import { DetalleMaquetaLocalStorageComponent } from './components/gestion-persona-maqueta/components/detalle-maqueta-local-storage/detalle-maqueta-local-storage.component';
import { DetalleMaquetaNavigationComponent } from './components/gestion-persona-maqueta/components/detalle-maqueta-navigation/detalle-maqueta-navigation.component';
import { DetalleMaquetaUrlComponent } from './components/gestion-persona-maqueta/components/detalle-maqueta-url/detalle-maqueta-url.component';
import { GestionAreaComponent } from './components/gestion-area/gestion-area.component';
import { GestionCargoComponent } from './components/gestion-cargo/gestion-cargo.component';
import { GestionPruebaComponent } from './components/gestion-prueba/gestion-prueba.component';
import { GestionPruebaHijoComponent } from './components/gestion-prueba/components/gestion-prueba-hijo/gestion-prueba-hijo.component';
import { GestionPruebaHijoModalComponent } from './components/gestion-prueba/components/gestion-prueba-hijo-modal/gestion-prueba-hijo-modal.component';
import {AppPrimengModule} from "../../../app-primeng.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ModulesModule} from "../../modules.module";


@NgModule({
  declarations: [
    GestionPersonaComponent,
    GestionPersonaNgModelComponent,
    GestionPersonaMaquetaComponent,
    DetalleComponent,
    DetalleLocalStorageComponent,
    DetalleNavigationComponent,
    DetalleUrlComponent,
    DetalleNgModelComponent,
    DetalleNgModelLocalStorageComponent,
    DetalleNgModelNavigationComponent,
    DetalleNgModelUrlComponent,
    DetalleMaquetaComponent,
    DetalleMaquetaLocalStorageComponent,
    DetalleMaquetaNavigationComponent,
    DetalleMaquetaUrlComponent,
    GestionAreaComponent,
    GestionCargoComponent,
    GestionPruebaComponent,
    GestionPruebaHijoComponent,
    GestionPruebaHijoModalComponent
  ],
  entryComponents: [
    DetalleComponent,
    DetalleNgModelComponent,
    DetalleMaquetaComponent,
    GestionPruebaHijoModalComponent
  ],
  imports: [
    CommonModule,
    RrhhRoutingModule,
    AppPrimengModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    ModulesModule
  ]
})
export class RrhhModule { }
