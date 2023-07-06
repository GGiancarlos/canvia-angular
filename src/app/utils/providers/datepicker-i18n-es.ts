import {Injectable} from '@angular/core';
import {NgbDatepickerI18n, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {ngbDateStructToString} from '../utilitarios';
import {TranslationWidth} from "@angular/common";

// Define custom service providing the months and weekdays translations
@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {
    I18N_VALUES: any = {
        'es': {
            weekdays: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
            months: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        }
    };

    language: string = 'es';

    constructor() {
        super();
    }

    getWeekdayShortName(weekday: number): string {
      return this.I18N_VALUES[this.language].weekdays[weekday - 1];
    }
    getMonthShortName(month: number): string {
      return this.I18N_VALUES[this.language].months[month - 1];
    }
    getMonthFullName(month: number): string {
        return this.getMonthShortName(month);
    }

    getDayAriaLabel(date: NgbDateStruct): string {
        return ngbDateStructToString(date);
    }

  getWeekdayLabel(weekday: number, width?: TranslationWidth): string {
    return "";
  }
}
