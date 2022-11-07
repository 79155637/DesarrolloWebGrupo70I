import { Count, Filter, Where } from '@loopback/repository';
import { Pedido, Producto } from '../models';
import { PedidoRepository } from '../repositories';
export declare class PedidoProductoController {
    protected pedidoRepository: PedidoRepository;
    constructor(pedidoRepository: PedidoRepository);
    get(id: string, filter?: Filter<Producto>): Promise<Producto>;
    create(id: typeof Pedido.prototype.id, producto: Omit<Producto, 'id'>): Promise<Producto>;
    patch(id: string, producto: Partial<Producto>, where?: Where<Producto>): Promise<Count>;
    delete(id: string, where?: Where<Producto>): Promise<Count>;
}
