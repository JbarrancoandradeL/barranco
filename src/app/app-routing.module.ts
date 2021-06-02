import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Components/Cliente/listar/listar.component';
import { AddComponent } from './Components/Cliente/add/add.component';
import { EditComponent } from './Components/Cliente/edit/edit.component';



const routes: Routes = [
  {path: 'listarCliente' ,component: ListarComponent},
  {path: 'addCliente' ,   component: AddComponent},
  {path: 'editcliente' ,  component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
