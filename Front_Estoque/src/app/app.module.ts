import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarProdutosComponent } from './components/listar-produtos/listar-produtos.component';
import { CadastrarProdutosComponent } from './components/cadastrar-produtos/cadastrar-produtos.component';
import { FormsModule } from '@angular/forms';
import { ListarEstoquesComponent } from './components/listar-estoques/listar-estoques.component';
import { CadastrarEstoquesComponent } from './components/cadastrar-estoques/cadastrar-estoques.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarProdutosComponent,
    CadastrarProdutosComponent,
    ListarEstoquesComponent,
    CadastrarEstoquesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
