import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/produtos.service';
import { Produto } from 'src/app/Produto';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
    formulario: any;
    tituloFormulario?: string;
    produtos?: Produto[];
    produtoId?: number;
    visibilidadeTabela: boolean = true;
    visibilidadeFormulario: boolean = false;

  constructor(private produtosService : ProdutosService) { }

  ngOnInit(): void {
    this.produtosService.PegarTodos().subscribe(resultado =>{
      this.produtos = resultado;
    });
  }
  ExibirFormularioCadastro(): void {
    this.visibilidadeFormulario = true;
    this.visibilidadeTabela = false;
    this.tituloFormulario = 'Novo Produto';
    this.formulario = new FormGroup({
      Nome: new FormControl(null),
      Categoria: new FormControl(null),
      Preco: new FormControl(null),

    });
  }
  ExibirFormularioAtualizacao(produtoId : number): void{
    this.visibilidadeFormulario = true;
    this.visibilidadeTabela = true;

    this.produtosService.PegarPeloId(produtoId).subscribe(resultado => {
    this.tituloFormulario = `Atualizar ${resultado.nome} ${resultado.categoria}`;
    this.formulario = new FormGroup({
      produtoId: new FormControl(resultado.produtoId),
      Nome: new FormControl(resultado.nome),
      Categoria: new FormControl(resultado.categoria),
      Preco: new FormControl(resultado.preco),
    });
    });
  }
EnviarFormulario(): void {
  const produto : Produto = this.formulario.value;

  if (produto){
    this.produtosService.AtualizarProduto(produto).subscribe((resultado) => {
      this.visibilidadeFormulario = false;
      this.visibilidadeTabela = true;
      alert('Produto atualizado com sucesso');
      this.produtosService.PegarTodos().subscribe((registros) => {
        this.produtos = registros;
      });
    });
  } else {
    this.produtosService.SalvarProduto(produto).subscribe((resultado) => {
      this.visibilidadeFormulario = false;
      this.visibilidadeTabela = true;
      alert('Produto inserida com sucesso');
      this.produtosService.PegarTodos().subscribe((registros) => {
        this.produtos = registros;
      })
    });
  }
}
Voltar() : void {
  this.visibilidadeFormulario = false;
  this.visibilidadeTabela = true;
  this.produtosService.PegarTodos().subscribe(registros => {
    this.produtos = registros;
  });
}
}
