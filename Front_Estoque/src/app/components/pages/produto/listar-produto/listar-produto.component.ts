import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {
  produtos!: Produto[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.
      get<Produto[]>(
        "https://localhost:5001/api/produto/listar"
      )
      .subscribe({
        next: (produtos) => {
          this.produtos = produtos;
        }
      });
  }

  remover(id: number): void {
    this.http.
      delete<Produto>
      (`https://localhost:5001/api/produto/deletar/${id}`)
      .subscribe({
        next: (produto) => {
          this.ngOnInit();
        },
      });
  }

}
