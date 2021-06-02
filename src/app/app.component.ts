import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'barranco';

  constructor( private router: Router){

  }

  listarCliente(){
    this.router.navigate(["listarCliente"])
  }

  NuevoCliente(){
    this.router.navigate(['addCliente'])
  }
}
