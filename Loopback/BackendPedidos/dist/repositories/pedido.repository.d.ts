import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasOneRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Pedido, PedidoRelations, Persona, Producto } from '../models';
import { PersonaRepository } from './persona.repository';
import { ProductoRepository } from './producto.repository';
export declare class PedidoRepository extends DefaultCrudRepository<Pedido, typeof Pedido.prototype.id, PedidoRelations> {
    protected personaRepositoryGetter: Getter<PersonaRepository>;
    protected productoRepositoryGetter: Getter<ProductoRepository>;
    readonly persona: BelongsToAccessor<Persona, typeof Pedido.prototype.id>;
    readonly producto: HasOneRepositoryFactory<Producto, typeof Pedido.prototype.id>;
    constructor(dataSource: MongodbDataSource, personaRepositoryGetter: Getter<PersonaRepository>, productoRepositoryGetter: Getter<ProductoRepository>);
}
