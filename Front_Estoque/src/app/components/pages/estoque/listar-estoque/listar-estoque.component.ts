import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Estoque } from "src/app/models/estoque";

@Component({
  selector: "app-listar-folha",
  templateUrl: "./listar-estoque.component.html",
  styleUrls: ["./listar-estoque.component.css"],
})
export class ListarEstoqueComponent implements OnInit {
  estoques!: Estoque[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Estoque[]>("https://localhost:5001/api/estoque/listar")
      // Execução da requisição
      .subscribe({
        next: (estoques) => {
          console.table(estoques);
          this.estoques = estoques;
        },
      });
  }

  remover(id: number): void {
    this.http.
      delete<Estoque>
      (`https://localhost:5001/api/estoque/deletar/${id}`)
      .subscribe({
        next: (estoque) => {
          this.ngOnInit();
        },
      });
  }
}
