import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../../Service/cliente.service';
import { Cliente } from 'src/app/Models/Cliente';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  cliente:Cliente=new Cliente();
  constructor(private router:Router, private service:ClienteService) { }

  guardar():void{
    this.service.createCliente(this.cliente)
    .subscribe(data=>{
      console.log(this.cliente)
      this.router.navigate(["listarCliente"]);
    })
  }

  ngOnInit(): void {

  }



}
