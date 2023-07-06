import { Injectable } from '@angular/core';
import {
  NgbDateAdapter,
  NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';
import { stringToNgbDateStruct, ngbDateStructToString } from '../utilitarios';


@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '/';

  fromModel(value: string): NgbDateStruct {
    // @ts-ignore
    return stringToNgbDateStruct(value);
  }

  toModel(date: NgbDateStruct): string {
    return ngbDateStructToString(date);
  }
}
