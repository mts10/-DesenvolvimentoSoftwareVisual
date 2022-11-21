import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Produto } from 'src/app/Models/Produto';
import { Estoque } from 'src/app/Models/Estoque';

@Component({
  selector: 'app-cadastrar-estoques',
  templateUrl: './cadastrar-estoques.component.html',
  styleUrls: ['./cadastrar-estoques.component.css']
})
export class CadastrarEstoquesComponent implements OnInit {
  estoqueId!: number;
  quantidade!: number;
  produtoId!: number;
  nome!: string;
  produtos!: Produto[];
  categoria!: string;
  preco!: number; 

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<Produto[]>("https://localhost:7208/api/produto/cadastrar").subscribe({
      next: (produtos) => {
        this.produtos = produtos;
      },
    });
  }
  cadastrar(): void {
    let estoque: Estoque = {
      estoqueId: this.estoqueId,
      quantidade: this.quantidade,
      produtoId: this.produtoId,
      nome: this.nome,
      categoria: this.categoria,
      preco: this.preco 
    };
    
    // this.http.post<Estoque>("https://localhost:7208/api/estoque/cadastrar", estoque).subscribe({
    //   next: (estoque) = > {
    //     this.router.navigate(["estoque/listar"]);
    //   },
    // });
  }
}
