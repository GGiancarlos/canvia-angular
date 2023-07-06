import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Constantes } from './constantes';

export function trim(value: any): string {
    if (isEmpty(value)) {
        return '';
    }
    return value.toString().trim();
}

export function isEmpty(value: any): boolean {
    if (value == null || value == undefined) {
        return true;
    }
    if (value.__proto__.constructor === String) {
        return value.trim().length === 0;
    }
    if (value.__proto__.constructor === Array) {
        return value.length === 0;
    }
    if (value.__proto__.constructor === Object) {
        return Object.getOwnPropertyNames(value).length === 0;
    }
    return false;
}

export function isNotEmpty(value: any): boolean {
    return !isEmpty(value);
}

export function toNumber(value: any): number | null {
    if (isEmpty(value)) {
        return null;
    }
    return parseInt(value);
}

export function isNumber(value: any): value is number {
    return !isNaN(<number>toNumber(value));
}

export function padNumber(value: number) {
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    } else {
        return '';
    }
}

export function stringToNgbDateStruct(value: string) : NgbDateStruct | null {
    if (isEmpty(value)) {
        return  null;
    }
    const date = value.split(Constantes.DELIMITER_DATE);
    return {
      day: parseInt(date[0], 10),
      month: parseInt(date[1], 10),
      year: parseInt(date[2], 10)
    };
}
export function ngbDateStructToString(date: NgbDateStruct) : string {
    if (isEmpty(date)) {
        return  '';
    }
    return `${padNumber(date.day)}${Constantes.DELIMITER_DATE}${padNumber(date.month)}${Constantes.DELIMITER_DATE}${date.year}`;
}

export function stringFormatDDMMYYYY(fecha: string){
    let format = fecha.slice(0,10).split("-");
    return `${format[2]}/${format[1]}/${format[0]}`;
}

export function stringFormatYYYYMMDD(fecha: string){
    let format = fecha.split("/");
    return `${format[2]}-${format[1]}-${format[0]}`;
}

// Ini Cache localStorage
export function GUARDARKEYFILTRO(key:string) {
    return localStorage.setItem(Constantes.PARAM_LOCALSTORAGE_KEY, key);
}

export function OBTENERKEYFILTRO() {
    return localStorage.getItem(Constantes.PARAM_LOCALSTORAGE_KEY);
}

export function GUARDARFILTRO(filtro: any) {
    let key = OBTENERKEYFILTRO();
    localStorage.setItem(`${Constantes.PARAM_LOCALSTORAGE_FILTRO}${key}`, JSON.stringify(filtro));
}

export function OBTENERFILTRO() {
    let key = OBTENERKEYFILTRO();
    let filtro = localStorage.getItem(`${Constantes.PARAM_LOCALSTORAGE_FILTRO}${key}`);
    // @ts-ignore
  return JSON.parse(filtro);
}

export function ELIMINARFILTRO() {
    let key = OBTENERKEYFILTRO();
    localStorage.removeItem(Constantes.PARAM_LOCALSTORAGE_KEY);
    localStorage.removeItem(`${Constantes.PARAM_LOCALSTORAGE_FILTRO}${key}`);
}
// Ini Cache localStorage
