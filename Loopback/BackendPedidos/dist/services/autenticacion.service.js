"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const Repository_1 = require("@loopback/Repository");
const repositories_1 = require("../repositories");
const llaves_1 = require("../config/llaves");
const generator = require('password-generator');
const criptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
let AutenticacionService = class AutenticacionService {
    constructor(personaRepository) {
        this.personaRepository = personaRepository;
    }
    /*
     * Add service methods here
     */
    GenerarClave() {
        let clave = generator(8, false);
        return clave;
    }
    CifrarClave(clave) {
        let claveCifrada = criptoJS.MD5(clave).toString();
        return claveCifrada;
    }
    IdentificarPersona(usuario, clave) {
        try {
            let p = this.personaRepository.findOne({ where: { correo: usuario, clave: clave } });
            if (p) {
                return p;
            }
            return false;
        }
        catch (_a) {
            return false;
        }
    }
    GenerarTokenJWT(persona) {
        let token = jwt.sign({
            data: {
                id: persona.id,
                correo: persona.correo,
                nombre: persona.nombres + ' ' + persona.apellidos
            }
        }, llaves_1.Llaves.claveJWT);
        return token;
    }
    ValidarTokenJWT(token) {
        try {
            let datos = jwt.verify(token, llaves_1.Llaves.claveJWT);
            return datos;
        }
        catch (_a) {
            return false;
        }
    }
};
AutenticacionService = tslib_1.__decorate([
    (0, core_1.injectable)({ scope: core_1.BindingScope.TRANSIENT }),
    tslib_1.__param(0, (0, Repository_1.repository)(repositories_1.PersonaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PersonaRepository])
], AutenticacionService);
exports.AutenticacionService = AutenticacionService;
//# sourceMappingURL=autenticacion.service.js.map