import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ConfirmModalComponent} from "./modules/intranet/shared/components/confirm-modal/confirm-modal.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppPrimengModule} from "./app-primeng.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ModulesModule} from "./modules/modules.module";

@NgModule({
  declarations: [
    AppComponent,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppPrimengModule,
    NgbModule,
    ModulesModule
  ],
  entryComponents: [
    ConfirmModalComponent
  ],
  exports: [
    AppPrimengModule,
    ConfirmModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
