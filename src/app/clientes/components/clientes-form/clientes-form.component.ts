import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../models/cliente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {

  @Input() btnText!: string;
  @Input() cliente!: Cliente;

  @Output() submit: EventEmitter<Cliente>
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){
    this.submit = new EventEmitter<Cliente>();

    this.cliente = {
      "nome": "Daniel ",
      "email": "email@email.com",
      "documento": "34342324342",
      "dataNascimento": "19/05/2023",
      "contato": {
        "ddd": "81",
        "telefone": "999999999"
      },
      "endereco": {
        "rua": "SA",
        "numero": "333",
        "cep": "54000000",
        "bairro": "CJS",
        "cidade": "JBT",
        "estado": "PE"
      },
      "id": 5
    }
  }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm():void {
    this.form = this.formBuilder.group({
      nome: [this.cliente ? this.cliente.nome: '', [Validators.required] ],
      email: [this.cliente ? this.cliente.email: '', [Validators.required] ],
      documento: [this.cliente ? this.cliente.documento: '', [Validators.required] ],
      dataNascimento: [this.cliente ? this.cliente.dataNascimento: '', [Validators.required] ],
      contato: this.formBuilder.group({
        ddd: [this.cliente ? this.cliente.contato?.ddd: ''],
        telefone: [this.cliente ? this.cliente.contato?.telefone: ''],
      }),
      endereco: this.formBuilder.group({
        rua: [this.cliente ? this.cliente.endereco?.rua : ''],
        numero: [this.cliente ? this.cliente.endereco?.numero : ''],
        cep: [this.cliente ? this.cliente.endereco?.cep : ''],
        bairro: [this.cliente ? this.cliente.endereco?.bairro : ''],
        cidade: [this.cliente ? this.cliente.endereco?.cidade : ''],
        estado: [this.cliente ? this.cliente.endereco?.estado : ''],
      })
    })
  }

  onSubmit() {
    this.submit.emit(this.form.value);
  }

  onCancel(){
    this.router.navigate(['/clientes']);
  }
}
