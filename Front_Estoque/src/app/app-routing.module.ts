import { ListarEstoqueComponent } from "./components/pages/estoque/listar-estoque/listar-estoque.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarEstoqueComponent } from "./components/pages/estoque/cadastrar-estoque/cadastrar-estoque.component";
import { CadastrarProdutoComponent } from "./components/pages/produto/cadastrar-produto/cadastrar-produto.component";
import { ListarProdutoComponent } from "./components/pages/produto/listar-produto/listar-produto.component";
import { CdEstoquesComponent } from "./components/pages/cd-estoques/cd-estoques.component";

const routes: Routes = [
  {
    path: "pages/produto/cadastrar",
    component: CadastrarProdutoComponent,
  },
  {
    path: "pages/produto/cadastrar/:id",
    component: CadastrarProdutoComponent,
  },
  {
    path: "pages/produto/listar",
    component: ListarProdutoComponent,
  },
  {
    path: "pages/estoque/cadastrar",
    component: CadastrarEstoqueComponent,
  },
  {
    path: "pages/estoque/listar",
    component: ListarEstoqueComponent,
  },
  {
    path: "pages/cd-estoques/cd-estoques",
    component: CdEstoquesComponent
  },
  {
    path: "pages/cd-estoques/cd-estoques/:id",
    component: CdEstoquesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
