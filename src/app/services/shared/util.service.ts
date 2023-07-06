import { Injectable } from '@angular/core';
import {Constantes} from "../../utils/constantes";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmModalComponent} from "../../modules/intranet/shared/components/confirm-modal/confirm-modal.component";
import {trim} from "../../utils/utilitarios";
import {isFunction} from "rxjs/internal/util/isFunction";

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private modalService: NgbModal) {
  }

  private mensajeConfirmacion(titulo: string, mensaje: string, tipoModal: number, claseModal: string, fnSuccess?: () => void, fnDanger?: () => void) {

    const modal = {
      titulo: titulo,
      mensaje: mensaje
    };

    const modalRef = this.modalService.open(ConfirmModalComponent, { backdrop: 'static', keyboard: false });
    modalRef.componentInstance.modal = modal;
    modalRef.componentInstance.tipoModal = tipoModal;
    modalRef.componentInstance.classModal = claseModal;
    modalRef.componentInstance.respuesta.subscribe((data: any) => {

      if (trim(data) === 'SI') {
        if (isFunction(fnSuccess)) {
          fnSuccess();
        }
      } else if (trim(data) === 'NO') {
        if (isFunction(fnDanger)) {
          fnDanger();
        }
      }
    });
  }

  // Alerta mensaje simple
  modalMensaje(titulo: string, mensaje: string, claseModal: string) {
    this.mensajeConfirmacion(titulo, mensaje, Constantes.MODAL_OK, claseModal);
  }

  // Alerta confirmacion
  modalConfirmacion(titulo: string, mensaje: string, claseModal: string, fnSuccess?: () => void, fnDanger?: () => void) {
    this.mensajeConfirmacion(titulo, mensaje, Constantes.MODAL_NO_SI, claseModal, fnSuccess, fnDanger);
  }
}
