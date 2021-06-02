import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Models/Cliente';
import { ClienteService } from '../../../Service/cliente.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {



  array!: Cliente[];

  constructor(private service:ClienteService, private router:Router) { }

  filtercliente=''

  ngOnInit(): void {
    this.service.getClientes()
    .subscribe(data =>{
      this.array=data;
    })
  }


  Editar(cliente:Cliente):void{
    localStorage.setItem("id",cliente.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(cliente:Cliente){
   this.service.deleteCliente(cliente)
    .subscribe(data=>{
      this.array=this.array.filter(p=>p!==cliente);
      alert("Usuario eliminado...");
    })
  }

}

//export class AuthModule {} export * from './components/signin.component
