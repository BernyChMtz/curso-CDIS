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

  displayProgressBar : boolean;

  constructor(private modalService: NgbModal, private autoService: AutosService) { }

  ngOnInit() {
    this.displayProgressBar = true;
    this.autoService.getAutos().subscribe((response)=>{
      setTimeout(() => {
        this.displayProgressBar = false;
        this.autos = response.data;
      }, 1500);
      
    })
  }

  onSelect(auto: Automovil, content): void {
    this.autoSeleccionado = auto;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

}
