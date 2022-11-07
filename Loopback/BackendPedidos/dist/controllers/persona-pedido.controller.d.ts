import { Count, Filter, Where } from '@loopback/repository';
import { Persona, Pedido } from '../models';
import { PersonaRepository } from '../repositories';
export declare class PersonaPedidoController {
    protected personaRepository: PersonaRepository;
    constructor(personaRepository: PersonaRepository);
    find(id: string, filter?: Filter<Pedido>): Promise<Pedido[]>;
    create(id: typeof Persona.prototype.id, pedido: Omit<Pedido, 'id'>): Promise<Pedido>;
    patch(id: string, pedido: Partial<Pedido>, where?: Where<Pedido>): Promise<Count>;
    delete(id: string, where?: Where<Pedido>): Promise<Count>;
}
