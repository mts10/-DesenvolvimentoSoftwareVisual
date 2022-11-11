import { ListarProdutosComponent } from './components/listar-produtos/listar-produtos.component';
import { CadastrarProdutosComponent } from './components/cadastrar-produtos/cadastrar-produtos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "produto/cadastrar",
    component: CadastrarProdutosComponent
  },
  {
    path: "produto/listar",
    component: ListarProdutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
