import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModulesComponent} from "./modules.component";

const routes: Routes = [
  {
    path: '', component: ModulesComponent,
    children: [
      {path: 'rrhh', loadChildren: () => import('./intranet/rrhh/rrhh.module').then(m => m.RrhhModule) },
      {path: 'consulta', loadChildren: () => import('./intranet/consulta/consulta.module').then(m => m.ConsultaModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
