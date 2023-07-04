import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from "primeng/table";
import {PanelMenuModule} from "primeng/panelmenu";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {DialogModule} from "primeng/dialog";
import {AccordionModule} from "primeng/accordion";
import {ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {TooltipModule} from "primeng/tooltip";
import {FieldsetModule} from "primeng/fieldset";
import {CheckboxModule} from "primeng/checkbox";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TableModule,
    PanelMenuModule,
    ProgressSpinnerModule,
    DialogModule,
    AccordionModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    TooltipModule,
    FieldsetModule,
    CheckboxModule
  ]
})
export class AppPrimengModule { }
