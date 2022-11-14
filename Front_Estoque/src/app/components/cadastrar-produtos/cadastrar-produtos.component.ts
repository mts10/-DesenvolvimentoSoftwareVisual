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
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.http.get<Produto[]>("https://localhost:5001/api/produto/listar").subscribe({
    //   next: (produtos) => {
    //     this.produtos = produtos;
    //   },
    // });
  }

  cadastrar(): void {
    let produto: Produto = {
      produtoId: 103,
      nome: this.nome,
      categoria: this.categoria,
      preco: this.preco,
    };

    console.log(produto);
    this.http.post<Produto>("https://localhost:7208/api/produto/cadastrar", produto).subscribe({
      next: (produto) => {
        this.router.navigate(["produto/listar"]);
      },
    });
  }

}
