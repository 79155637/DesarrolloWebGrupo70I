"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const persona_model_1 = require("./persona.model");
const producto_model_1 = require("./producto.model");
let Pedido = class Pedido extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Pedido.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Pedido.prototype, "id_producto", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Pedido.prototype, "cantidad", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Pedido.prototype, "total", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Pedido.prototype, "estado", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => persona_model_1.Persona),
    tslib_1.__metadata("design:type", String)
], Pedido.prototype, "personaId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => producto_model_1.Producto),
    tslib_1.__metadata("design:type", producto_model_1.Producto)
], Pedido.prototype, "producto", void 0);
Pedido = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Pedido);
exports.Pedido = Pedido;
//# sourceMappingURL=pedido.model.js.map