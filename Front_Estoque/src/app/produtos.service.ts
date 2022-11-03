import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './Produto';
import {HttpHeaders, HttpClient, HttpResponse} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  url = 'https://localhost:7208/api/produto/listar';

  constructor(private http: HttpClient) { }

PegarTodos(): Observable<Produto[]>{
  return this.http.get<Produto[]>(this.url);
}
PegarPeloId(produtoId: number): Observable<Produto>{
  const apiUrl= `${this.url}/${produtoId}`;
  return this.http.get<Produto>(apiUrl);
}
SalvarProduto(produto: Produto) : Observable<any>{
  return this.http.post<Produto>(this.url, produto, httpOptions);
}
AtualizarProduto(produto: Produto) : Observable<Produto>{
  return this.http.put<Produto>(this.url, produto, httpOptions);
}
ExcluirProduto(produtoId: number) : Observable<any>{
  const apiUrl = `${this.url}/${produtoId}`;
  return this.http.delete<number>(apiUrl, httpOptions);
}





}
