import { AutosService } from './../autos.service';

import { Automovil } from './../models';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  page = 1;
  pageSize = 5;
  
  autos: Automovil[];
  autoSeleccionado: Automovil;
  closeResult = '';

  constructor(private modalService: NgbModal, private autoService: AutosService) { }

  ngOnInit() {
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    })
  }

  onSelect(auto: Automovil, content): void {
    this.autoSeleccionado = auto;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

}
