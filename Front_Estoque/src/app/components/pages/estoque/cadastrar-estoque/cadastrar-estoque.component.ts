import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Produto } from "src/app/models/produto";
import { Estoque } from "src/app/models/estoque";

@Component({
  selector: "app-cadastrar-estoque",
  templateUrl: "./cadastrar-estoque.component.html",
  styleUrls: ["./cadastrar-estoque.component.css"],
})
export class CadastrarEstoqueComponent implements OnInit {
  produtos!: Produto[];
  produtoId!: number;
  quantidade!: number;
  criadoEm!: string;

  constructor(private http: HttpClient, private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.http.get<Produto[]>("https://localhost:5001/api/produto/listar").subscribe({
      next: (produtos) => {
        this.produtos = produtos;
      },
    });
  }

  cadastrar(): void {
    console.log(this.produtoId);

    let estoque: Estoque = {
      produtoId: this.produtoId,
      quantidade: this.quantidade,
      criadoEm: this.criadoEm
    };

    this.http.post<Estoque>("https://localhost:5001/api/estoque/cadastrar", estoque).subscribe({
      next: (estoque) => {
        this._snackBar.open("Estoque cadastrado!", "Ok!", {
          horizontalPosition: "right",
          verticalPosition: "top",
        });
        this.router.navigate(["pages/produto/listar"]);
      },
    });
  }
}
