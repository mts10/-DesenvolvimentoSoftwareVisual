import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CadastrarProdutoComponent } from "./components/pages/produto/cadastrar-produto/cadastrar-produto.component";
import { ListarProdutoComponent } from "./components/pages/produto/listar-produto/listar-produto.component";
import { CadastrarEstoqueComponent } from "./components/pages/estoque/cadastrar-estoque/cadastrar-estoque.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ListarEstoqueComponent } from "./components/pages/estoque/listar-estoque/listar-estoque.component";
import { CdEstoquesComponent } from './components/pages/cd-estoques/cd-estoques.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarProdutoComponent,
    ListarProdutoComponent,
    CadastrarEstoqueComponent,
    ListarEstoqueComponent,
    CdEstoquesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
