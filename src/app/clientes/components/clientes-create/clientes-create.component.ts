import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrls: ['./clientes-create.component.scss']
})
export class ClientesCreateComponent {
  btnSalvar = 'Salvar';

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ){}

  criarCliente(cliente: Cliente) {
    this.clienteService.criar(cliente).subscribe(() => {
      this.router.navigate(['/clientes']);
    })
  }
}
