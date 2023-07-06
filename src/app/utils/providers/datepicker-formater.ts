import { Injectable } from '@angular/core';
import {
    NgbDateStruct,
    NgbDateParserFormatter
} from '@ng-bootstrap/ng-bootstrap';
import { stringToNgbDateStruct, ngbDateStructToString } from '../utilitarios';

@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

    readonly DELIMITER = '/';

    parse(value: string): NgbDateStruct {
        // @ts-ignore
      return stringToNgbDateStruct(value);
    }

    format(date: NgbDateStruct): string {
        return ngbDateStructToString(date);
    }
}
