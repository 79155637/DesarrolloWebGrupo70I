import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Pedido } from '../models';
import { PedidoRepository } from '../repositories';
export declare class PedidoController {
    pedidoRepository: PedidoRepository;
    constructor(pedidoRepository: PedidoRepository);
    create(pedido: Omit<Pedido, 'id'>): Promise<Pedido>;
    count(where?: Where<Pedido>): Promise<Count>;
    find(filter?: Filter<Pedido>): Promise<Pedido[]>;
    updateAll(pedido: Pedido, where?: Where<Pedido>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Pedido>): Promise<Pedido>;
    updateById(id: string, pedido: Pedido): Promise<void>;
    replaceById(id: string, pedido: Pedido): Promise<void>;
    deleteById(id: string): Promise<void>;
}
