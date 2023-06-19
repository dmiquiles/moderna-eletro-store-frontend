import { Component } from '@angular/core';
import { ClienteService } from 'src/app/clientes/services/cliente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private clienteService: ClienteService
  ){
    this.listar();
  }

  listar() {
    this.clienteService.listar().subscribe( 
      (sucesso) => console.log(sucesso),
      (erro) => console.log(erro)
    )
  }
}
