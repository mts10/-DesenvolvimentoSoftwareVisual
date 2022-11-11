import { Produto } from './../../Models/Produto';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

produtos!: Produto[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Produto[]>("https://localhost:7208/api/produto/listar")
    .subscribe({
      next: (produtos) => {
        this.produtos = produtos;
      }
    });
  }
  remover(id: number): void {
    this.http.delete<Produto>
    (`https://localhost:7208/api/produto/deletar/${id}`)
    .subscribe({
      next: (produto) => {
        this.ngOnInit();
      }
    })
  }

}
