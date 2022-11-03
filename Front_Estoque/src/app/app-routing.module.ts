
import { NgModule } from '@angular/core';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'produtos', component: ProdutosComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
