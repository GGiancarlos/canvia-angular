import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConsultaPersonaComponent} from "./components/consulta-persona/consulta-persona.component";

const routes: Routes = [
  {path: 'consulta-persona', component: ConsultaPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaRoutingModule { }
