"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaController = void 0;
const tslib_1 = require("tslib");
const service_1 = require("@loopback/core/dist/service");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const rest_2 = require("@loopback/rest");
const llaves_1 = require("../config/llaves");
const models_1 = require("../models");
const credenciales_model_1 = require("../models/credenciales.model");
const repositories_1 = require("../repositories");
const autenticacion_service_1 = require("../services/autenticacion.service");
const fetch = require('node-fetch');
let PersonaController = class PersonaController {
    constructor(personaRepository, servicioAutenticacion) {
        this.personaRepository = personaRepository;
        this.servicioAutenticacion = servicioAutenticacion;
    }
    async identificarPersona(credenciales) {
        let p = await this.servicioAutenticacion.IdentificarPersona(credenciales.usuario, credenciales.clave);
        if (p) {
            let token = this.servicioAutenticacion.GenerarTokenJWT(p);
            return {
                datos: {
                    nombre: p.nombres,
                    correo: p.correo,
                    id: p.id
                },
                tk: token
            };
        }
        else {
            throw new rest_2.HttpErrors[401]("Datos Invalidos");
        }
    }
    async create(persona) {
        let clave = this.servicioAutenticacion.GenerarClave();
        let claveCifrada = this.servicioAutenticacion.CifrarClave(clave);
        persona.clave = claveCifrada;
        let p = await this.personaRepository.create(persona);
        //Notificar al Usuario
        let destino = persona.correo;
        let asunto = 'Registro en la plataforma';
        let contenido = `Hola ${persona.nombres}, su nombre de usuario es: ${persona.correo} y su contraseña es: ${clave}`;
        fetch(`${llaves_1.Llaves.urlServiciosNotificaciones}/envio-correo?correo_destino=${destino}&asunto=${asunto}&contenido = ${contenido}`)
            .then((data) => {
            console.log(data);
        });
        return p;
    }
    async count(where) {
        return this.personaRepository.count(where);
    }
    async find(filter) {
        return this.personaRepository.find(filter);
    }
    async updateAll(persona, where) {
        return this.personaRepository.updateAll(persona, where);
    }
    async findById(id, filter) {
        return this.personaRepository.findById(id, filter);
    }
    async updateById(id, persona) {
        await this.personaRepository.updateById(id, persona);
    }
    async replaceById(id, persona) {
        await this.personaRepository.replaceById(id, persona);
    }
    async deleteById(id) {
        await this.personaRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)("/IdentificarPersona", {
        responses: {
            '200': {
                description: "Identificación de usuarios"
            }
        }
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [credenciales_model_1.Credenciales]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaController.prototype, "identificarPersona", null);
tslib_1.__decorate([
    (0, rest_1.post)('/personas'),
    (0, rest_1.response)(200, {
        description: 'Persona model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Persona) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Persona, {
                    title: 'NewPersona',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/personas/count'),
    (0, rest_1.response)(200, {
        description: 'Persona model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Persona)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/personas'),
    (0, rest_1.response)(200, {
        description: 'Array of Persona model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Persona, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Persona)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/personas'),
    (0, rest_1.response)(200, {
        description: 'Persona PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Persona, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Persona)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Persona, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/personas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Persona model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Persona, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Persona, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/personas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Persona PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Persona, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Persona]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/personas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Persona PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Persona]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/personas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Persona DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PersonaController.prototype, "deleteById", null);
PersonaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PersonaRepository)),
    tslib_1.__param(1, (0, service_1.service)(autenticacion_service_1.AutenticacionService)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PersonaRepository,
        autenticacion_service_1.AutenticacionService])
], PersonaController);
exports.PersonaController = PersonaController;
//# sourceMappingURL=persona.controller.js.map