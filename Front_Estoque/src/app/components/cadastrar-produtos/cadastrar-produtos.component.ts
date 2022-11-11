import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {
  formulario: any;
  tituloFormulario?: string;


  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }
  ExibirFormularioCadastro(): void {
    this.tituloFormulario = 'Novo Produto';
    this.formulario = new FormGroup({
      Nome: new FormControl(null),
      Categoria: new FormControl(null),
      Preco: new FormControl(null),

    });
  }
}
