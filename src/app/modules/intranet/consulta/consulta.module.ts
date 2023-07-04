import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConsultaRoutingModule} from './consulta-routing.module';
import {ConsultaPersonaComponent} from './components/consulta-persona/consulta-persona.component';
import {AppPrimengModule} from "../../../app-primeng.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ModulesModule} from "../../modules.module";


@NgModule({
  declarations: [
    ConsultaPersonaComponent,
  ],
  imports: [
    CommonModule,
    ConsultaRoutingModule,
    AppPrimengModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    ModulesModule
  ]
})
export class ConsultaModule { }
