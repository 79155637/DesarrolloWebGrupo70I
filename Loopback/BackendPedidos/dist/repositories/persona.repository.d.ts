import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Persona, PersonaRelations, Pedido } from '../models';
import { PedidoRepository } from './pedido.repository';
export declare class PersonaRepository extends DefaultCrudRepository<Persona, typeof Persona.prototype.id, PersonaRelations> {
    protected pedidoRepositoryGetter: Getter<PedidoRepository>;
    readonly pedidos: HasManyRepositoryFactory<Pedido, typeof Persona.prototype.id>;
    constructor(dataSource: MongodbDataSource, pedidoRepositoryGetter: Getter<PedidoRepository>);
}
