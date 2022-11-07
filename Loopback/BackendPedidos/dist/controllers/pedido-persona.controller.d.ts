import { Pedido, Persona } from '../models';
import { PedidoRepository } from '../repositories';
export declare class PedidoPersonaController {
    pedidoRepository: PedidoRepository;
    constructor(pedidoRepository: PedidoRepository);
    getPersona(id: typeof Pedido.prototype.id): Promise<Persona>;
}
