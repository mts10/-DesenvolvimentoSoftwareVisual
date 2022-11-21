import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Estoque } from 'src/app/Models/Estoque';

@Component({
  selector: 'app-listar-estoques',
  templateUrl: './listar-estoques.component.html',
  styleUrls: ['./listar-estoques.component.css']
})
export class ListarEstoquesComponent implements OnInit {

estoques!: Estoque[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Estoque[]>("https://localhost:7208/api/estoque/listar")
    .subscribe({
      next: (estoques) => {
        this.estoques = estoques;
      }
    });
  }
  remover(id: number): void {
    this.http.delete<Estoque>
    (`https://localhost:7208/api/estoque/deletar/${id}`)
    .subscribe({
      next: (estoque) => {
        this.ngOnInit();
      }
    })
  }


}
