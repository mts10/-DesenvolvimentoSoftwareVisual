import { Produto } from "./Produto";

export interface Estoque {
    estoqueId?: number,
    quantidade: number,
    produtoId: number;
    nome: string;
    produto?: Produto;
    categoria: string;
    preco: number; 
}