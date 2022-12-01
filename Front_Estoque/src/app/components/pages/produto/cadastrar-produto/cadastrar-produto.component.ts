import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Produto } from "src/app/models/produto";

@Component({
  selector: "app-cadastrar-funcionario",
  templateUrl: "./cadastrar-produto.component.html",
  styleUrls: ["./cadastrar-produto.component.css"],
})
export class CadastrarProdutoComponent implements OnInit {
  nome!: string;
  id!: string;
  categoria!: string;
  preco!: number;
  criadoEm!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        let { id } = params;
        if (id !== undefined) {
          this.http.get<Produto>(`https://localhost:5001/api/produto/buscar/${id}`).subscribe({
            next: (produto) => {
              this.id = id;
              this.nome = produto.nome;
              this.categoria = produto.categoria;
              this.preco = produto.preco;
            },
          });
        }
      },
    });
  }

  alterar(): void {
    let produto: Produto = {
      produtoId: Number.parseInt(this.id),
      nome: this.nome,
      categoria: this.categoria,
      preco: this.preco,
      criadoEm: this.criadoEm
    };

    this.http.patch<Produto>("https://localhost:5001/api/produto/alterar", produto).subscribe({
      next: (produto) => {
        this._snackBar.open("Produto alterado!", "Ok!", {
          horizontalPosition: "right",
          verticalPosition: "top",
        });
        this.router.navigate(["pages/produto/listar"]);
      },
    });
  }

  cadastrar(): void {
    let produto: Produto = {
      nome: this.nome,
      categoria: this.categoria,
      preco: this.preco,
    };

    //Configurando a requisição para a API
    this.http
      .post<Produto>("https://localhost:5001/api/produto/cadastrar", produto)
      // Executar a requisição
      .subscribe({
        next: (produto) => {
          //Executamos o que for necessário quando a requisição
          //for bem-sucedida
          this._snackBar.open("Produto cadastrado!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/produto/listar"]);
        }
      });
  }
}
