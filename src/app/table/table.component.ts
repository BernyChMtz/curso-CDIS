import { AUTOMOVILES } from './../data';
import { Automovil } from './../models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  autos: Automovil[];
  autoSeleccionado: Automovil;

  constructor() { }

  ngOnInit(): void {
    this.autos = AUTOMOVILES;
  }

}
