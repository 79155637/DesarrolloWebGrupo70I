"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PedidoController = class PedidoController {
    constructor(pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }
    async create(pedido) {
        return this.pedidoRepository.create(pedido);
    }
    async count(where) {
        return this.pedidoRepository.count(where);
    }
    async find(filter) {
        return this.pedidoRepository.find(filter);
    }
    async updateAll(pedido, where) {
        return this.pedidoRepository.updateAll(pedido, where);
    }
    async findById(id, filter) {
        return this.pedidoRepository.findById(id, filter);
    }
    async updateById(id, pedido) {
        await this.pedidoRepository.updateById(id, pedido);
    }
    async replaceById(id, pedido) {
        await this.pedidoRepository.replaceById(id, pedido);
    }
    async deleteById(id) {
        await this.pedidoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/pedidos'),
    (0, rest_1.response)(200, {
        description: 'Pedido model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Pedido) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pedido, {
                    title: 'NewPedido',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PedidoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/pedidos/count'),
    (0, rest_1.response)(200, {
        description: 'Pedido model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Pedido)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PedidoController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/pedidos'),
    (0, rest_1.response)(200, {
        description: 'Array of Pedido model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Pedido, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Pedido)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PedidoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/pedidos'),
    (0, rest_1.response)(200, {
        description: 'Pedido PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pedido, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Pedido)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Pedido, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PedidoController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/pedidos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Pedido model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pedido, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Pedido, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PedidoController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/pedidos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Pedido PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pedido, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Pedido]),
    tslib_1.__metadata("design:returntype", Promise)
], PedidoController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/pedidos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Pedido PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Pedido]),
    tslib_1.__metadata("design:returntype", Promise)
], PedidoController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/pedidos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Pedido DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PedidoController.prototype, "deleteById", null);
PedidoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PedidoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PedidoRepository])
], PedidoController);
exports.PedidoController = PedidoController;
//# sourceMappingURL=pedido.controller.js.map