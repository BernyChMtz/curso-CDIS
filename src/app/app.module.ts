import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VistasComponent } from './vistas/vistas.component';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './table/table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalAddUpdateComponent } from './modal-add-update/modal-add-update.component';
import { FormsModule } from '@angular/forms';
import { ModalConfirmActionComponent } from './modal-confirm-action/modal-confirm-action.component';
import { FormatoModelosPipe } from './pipes/formato-modelos.pipe';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistasComponent,
    ListComponent,
    TableComponent,
    PageNotFoundComponent,
    ModalAddUpdateComponent,
    ModalConfirmActionComponent,
    FormatoModelosPipe,
    LogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalAddUpdateComponent, ModalConfirmActionComponent]
})
export class AppModule { }
