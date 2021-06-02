import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  constructor( private http: HttpClient) { }

  Url = "https://localhost:44334/api/Clientes"

  getClientes(){
    return this.http.get<Cliente[]>(this.Url);
  }

  createCliente(cliente:Cliente){
     return this.http.post<Cliente>(this.Url, cliente)
  }

  getClienteId(id:number){
    return this.http.get<Cliente>(this.Url+"/"+id);
  }
  updateCliente(cliente:Cliente){
    return this.http.put<Cliente>(this.Url+"/"+cliente.id,cliente);
  }
  deleteCliente(cliente:Cliente){
    return this.http.delete<Cliente>(this.Url+"/"+cliente.id);
  }


}
