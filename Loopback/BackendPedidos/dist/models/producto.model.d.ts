import { Entity } from '@loopback/repository';
export declare class Producto extends Entity {
    id?: string;
    nombre: string;
    precio: number;
    imagen: string;
    pedidoId?: string;
    constructor(data?: Partial<Producto>);
}
export interface ProductoRelations {
}
export declare type ProductoWithRelations = Producto & ProductoRelations;
