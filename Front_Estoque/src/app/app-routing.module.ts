import { ListarProdutosComponent } from './components/listar-produtos/listar-produtos.component';
import { CadastrarProdutosComponent } from './components/cadastrar-produtos/cadastrar-produtos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEstoquesComponent } from './components/listar-estoques/listar-estoques.component';
import { CadastrarEstoquesComponent } from './components/cadastrar-estoques/cadastrar-estoques.component';

const routes: Routes = [
  {
    path: "produto/cadastrar",
    component: CadastrarProdutosComponent
  },
  {
    path: "produto/listar",
    component: ListarProdutosComponent
  },
  {
    path: "produto/cadastrar/:id",
    component: CadastrarProdutosComponent
  },
  {
    path: "estoque/listar",
    component: ListarEstoquesComponent
  },
  {
    path: "estoque/cadastrar",
    component: CadastrarEstoquesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
