import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/Models/Produto';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {
  nome!: string;
  categoria!: string;
  preco!: number;
  mensagem!: string;
  id!: string;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        let { id } = params;
        if (id !== undefined) {
          this.http.get<Produto>(`https://localhost:7208/api/produto/buscar/${id}`).subscribe({
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

  cadastrar(): void {
    let produto: Produto = {
      nome: this.nome,
      categoria: this.categoria,
      preco: this.preco,
    };
    this.http.post<Produto>("https://localhost:7208/api/produto/cadastrar", produto).subscribe({
      next: (produto) => {
        this.router.navigate(["produto/listar"]);
      },
      error: (error) => {
        if (error.status === 400) {
          this.mensagem = "Algum erro de validação ocorreu.";
        } else if (error.status === 0) {
          this.mensagem = "A sua API não está rodando."
        }
      }
    });
  }

  alterar(): void {
    let produto: Produto = {
    produtoId: Number.parseInt(this.id),
    nome: this.nome,
    categoria: this.categoria,
    preco: this.preco,
    };

    this.http.patch<Produto>("https://localhost:7208/api/produto/alterar", produto).subscribe({
      next: (produto) => {
        this.router.navigate(["produto/listar"])
      }
    })

  }
}
