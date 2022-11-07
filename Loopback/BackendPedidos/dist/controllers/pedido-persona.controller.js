"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoPersonaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PedidoPersonaController = class PedidoPersonaController {
    constructor(pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }
    async getPersona(id) {
        return this.pedidoRepository.persona(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/pedidos/{id}/persona', {
        responses: {
            '200': {
                description: 'Persona belonging to Pedido',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Persona) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PedidoPersonaController.prototype, "getPersona", null);
PedidoPersonaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PedidoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PedidoRepository])
], PedidoPersonaController);
exports.PedidoPersonaController = PedidoPersonaController;
//# sourceMappingURL=pedido-persona.controller.js.map