import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../../Service/cliente.service';
import { Cliente } from 'src/app/Models/Cliente';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  cliente :Cliente=new Cliente();

  constructor(private router:Router,private service:ClienteService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id") || 1;
    this.service.getClienteId(+id)
    .subscribe(data=>{
      this.cliente=data;
    })

  }
  Actualizar(cliente:Cliente){
    this.service.updateCliente(cliente)
    .subscribe(data=>{
      this.cliente=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }
}
