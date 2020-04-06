import { ModalConfirmActionComponent } from './../modal-confirm-action/modal-confirm-action.component';
import { ModalAddUpdateComponent } from './../modal-add-update/modal-add-update.component';

import { Automovil } from './../models';
import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  page : number;
  pageSize : number;
  searchText;

  autos: Automovil[];
  autoSeleccionado: Automovil;

  displayProgressBar : boolean;

  constructor(private autoService: AutosService, private modalService: NgbModal) { }

  ngOnInit() {
    this.displayProgressBar = true;
    this.pageSize = 10;
    this.page = +sessionStorage.getItem('currentPage');
    this.autoService.getAutos().subscribe((response)=>{
      setTimeout(() => {
        this.displayProgressBar = false;
        this.autos = response.data;
      }, 1500);
    })
  }

  openModalEditar(auto: Automovil) {
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true });
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';

    modalRef.result.then(
      (auto) => {
        this.autoService.updateAutos(auto).subscribe(value => {
          sessionStorage.setItem('currentPage', this.page.toString());
          this.ngOnInit();
        });
      },
      (reason) => {
        console.log(reason);
      }
    );
  }

  openModalAgregar() {
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true });
    modalRef.componentInstance.accion = 'Agregar';

    modalRef.result.then(
      (auto) => {
        this.autoService.agregarAutos(auto).subscribe(response => {
          sessionStorage.setItem('currentPage', this.page.toString());
          this.ngOnInit();
        });
      },
      (reason) => {
        console.log(reason);
      }
    );
    
  }

  openModalConfirmarEliminar(auto: Automovil) {
    const modalRef = this.modalService.open(ModalConfirmActionComponent, { centered: true });
    modalRef.componentInstance.auto = auto;
    modalRef.result.then(
      (autoTemp) => {
        this.autoService.deleteAuto(autoTemp).subscribe(response => {
          sessionStorage.setItem('currentPage', this.page.toString());
          this.ngOnInit();
        })
      },
      (reason) => {
        console.log(reason)
      }
    )
  }

}
