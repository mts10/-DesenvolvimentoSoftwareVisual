import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Estoque } from "src/app/models/estoque";

@Component({
  selector: 'app-cd-estoques',
  templateUrl: './cd-estoques.component.html',
  styleUrls: ['./cd-estoques.component.css']
})
export class CdEstoquesComponent implements OnInit {
  quantidade!: number;
  estoqueId!: number;
  centro!: string;
  estoque!: Estoque;
  produtoId!: number;

  constructor(private http: HttpClient,private router: Router,private _snackBar: MatSnackBar,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let { estoqueId } = params;
      if (estoqueId !== undefined) {
        this.estoqueId = estoqueId;
        this.http
          .get<Estoque>(`https://localhost:5001/api/estoque/buscar/${estoqueId}`)
          .subscribe({
            next: (estoque) => {
              this.produtoId = estoque.produtoId;
              this.centro = estoque.centro!;
            },
          });
      }
    });
  }

  cadastrar(): void {
    this.estoque.centro = this.centro;

    this.http
      .put<Estoque>("https://localhost:5001/api/estoque/alterar", this.estoque)
      .subscribe({
        next: (estoque) => {
          this._snackBar.open("Centro cadastrado!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/estoque/listar"]);
        },
        error: (error) => {
          console.error("Algum erro aconteceu!", error);
        },
      });
  }
}