import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GestionPersonaComponent} from "./components/gestion-persona/gestion-persona.component";
import {
  DetalleNgModelNavigationComponent
} from "./components/gestion-persona-ng-model/components/detalle-ng-model-navigation/detalle-ng-model-navigation.component";
import {GestionPersonaMaquetaComponent} from "./components/gestion-persona-maqueta/gestion-persona-maqueta.component";
import {
  DetalleLocalStorageComponent
} from "./components/gestion-persona/components/detalle-local-storage/detalle-local-storage.component";
import {
  DetalleMaquetaLocalStorageComponent
} from "./components/gestion-persona-maqueta/components/detalle-maqueta-local-storage/detalle-maqueta-local-storage.component";
import {GestionAreaComponent} from "./components/gestion-area/gestion-area.component";
import {
  DetalleNgModelLocalStorageComponent
} from "./components/gestion-persona-ng-model/components/detalle-ng-model-local-storage/detalle-ng-model-local-storage.component";
import {GestionCargoComponent} from "./components/gestion-cargo/gestion-cargo.component";
import {
  DetalleNgModelUrlComponent
} from "./components/gestion-persona-ng-model/components/detalle-ng-model-url/detalle-ng-model-url.component";
import {GestionPruebaComponent} from "./components/gestion-prueba/gestion-prueba.component";
import {DetalleUrlComponent} from "./components/gestion-persona/components/detalle-url/detalle-url.component";
import {
  DetalleMaquetaUrlComponent
} from "./components/gestion-persona-maqueta/components/detalle-maqueta-url/detalle-maqueta-url.component";
import {GestionPersonaNgModelComponent} from "./components/gestion-persona-ng-model/gestion-persona-ng-model.component";
import {
  DetalleNavigationComponent
} from "./components/gestion-persona/components/detalle-navigation/detalle-navigation.component";
import {
  DetalleMaquetaNavigationComponent
} from "./components/gestion-persona-maqueta/components/detalle-maqueta-navigation/detalle-maqueta-navigation.component";

const routes: Routes = [
  {path: 'gestion-persona', component: GestionPersonaComponent},
  {path: 'gestion-persona-ng-model', component: GestionPersonaNgModelComponent},
  {path: 'gestion-persona-maqueta', component: GestionPersonaMaquetaComponent},

  {path: 'gestion-persona/detalle-url/:id', component: DetalleUrlComponent},
  {path: 'gestion-persona-ng-model/detalle-ng-model-url/:id', component: DetalleNgModelUrlComponent},
  {path: 'gestion-persona-maqueta/detalle-maqueta-url/:id', component: DetalleMaquetaUrlComponent},

  {path: 'gestion-persona/detalle-localstorage', component: DetalleLocalStorageComponent},
  {path: 'gestion-persona-ng-model/detalle-ng-model-localstorage', component: DetalleNgModelLocalStorageComponent},
  {path: 'gestion-persona-maqueta/detalle-maqueta-localstorage', component: DetalleMaquetaLocalStorageComponent},

  {path: 'gestion-persona/detalle-navigation', component: DetalleNavigationComponent},
  {path: 'gestion-persona-ng-model/detalle-ng-model-navigation', component: DetalleNgModelNavigationComponent},
  {path: 'gestion-persona-maqueta/detalle-maqueta-navigation', component: DetalleMaquetaNavigationComponent},

  {path: 'gestion-area', component: GestionAreaComponent},
  {path: 'gestion-cargo', component: GestionCargoComponent},
  {path: 'gestion-prueba', component: GestionPruebaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RrhhRoutingModule {
}
