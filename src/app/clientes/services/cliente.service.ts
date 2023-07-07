import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = 'http://localhost:3000/clientes';

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

  listarPorId(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.url}/${id}`)
  }

  criar(cliente: Cliente) {
    return this.http.post<Cliente>(this.url, cliente)
  }

  atualizar(id: number, cliente: Cliente) {
    return this.http.put<Cliente>(`${this.url}/${id}`, cliente)
  }

  deletar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }


}
