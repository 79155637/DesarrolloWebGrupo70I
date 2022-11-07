import { Entity } from '@loopback/repository';
import { Pedido } from './pedido.model';
export declare class Persona extends Entity {
    id?: string;
    nombres: string;
    apellidos: string;
    correo: string;
    celular: string;
    clave: string;
    pedidos: Pedido[];
    constructor(data?: Partial<Persona>);
}
export interface PersonaRelations {
}
export declare type PersonaWithRelations = Persona & PersonaRelations;
