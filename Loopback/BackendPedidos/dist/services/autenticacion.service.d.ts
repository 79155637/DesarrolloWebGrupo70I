import { PersonaRepository } from '../repositories';
import { Persona } from '../models/persona.model';
export declare class AutenticacionService {
    personaRepository: PersonaRepository;
    constructor(personaRepository: PersonaRepository);
    GenerarClave(): any;
    CifrarClave(clave: string): any;
    IdentificarPersona(usuario: string, clave: string): false | Promise<(Persona & import("../models/persona.model").PersonaRelations) | null>;
    GenerarTokenJWT(persona: Persona): any;
    ValidarTokenJWT(token: string): any;
}
