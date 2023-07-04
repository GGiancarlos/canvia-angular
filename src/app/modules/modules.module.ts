import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModulesRoutingModule} from './modules-routing.module';
import {ModulesComponent} from './modules.component';
import {MensajeAlertaComponent} from './intranet/shared/components/mensaje-alerta/mensaje-alerta.component';
import {AppPrimengModule} from "../app-primeng.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    ModulesComponent,
    MensajeAlertaComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    AppPrimengModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    MensajeAlertaComponent,
    ModulesComponent
  ]
})
export class ModulesModule { }
