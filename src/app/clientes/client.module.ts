import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClientesReadComponent } from './components/clientes-read/clientes-read.component';
import { ClientesUpdateComponent } from './components/clientes-update/clientes-update.component';
import { ClientesCreateComponent } from './components/clientes-create/clientes-create.component';
import { ClienteRoutingModule } from "./cliente-routing.module";
import { ClientesFormComponent } from './components/clientes-form/clientes-form.component';

@NgModule({
    declarations: [
    ClientesComponent,
    ClientesReadComponent,
    ClientesUpdateComponent,
    ClientesCreateComponent,
    ClientesFormComponent
  ],
    imports: [
      CommonModule,
      ClienteRoutingModule,
      SharedModule
    ],
  })
  export class ClienteModule { }