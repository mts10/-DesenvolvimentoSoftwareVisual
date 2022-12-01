import { Produto } from "./produto";

export interface Estoque {
    estoqueId?: number;
    quantidade: number;
    produto?: Produto
    criadoEm: string;
    produtoId: number;
    centro?: string;
}