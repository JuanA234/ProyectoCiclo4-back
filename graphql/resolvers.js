
import { resolverProyecto } from '../models/proyecto/resolver.js';
import { resolversUsuario } from '../models/usuario/resolver.js';
import { resolverAvance } from '../models/avance/resolver.js';
import { resolverInscripciones } from '../models/inscripcion/resolvers.js';
import { resolversAutenticacion } from './auth/resolvers.js';

export const resolvers = [
  resolversUsuario,
  resolverProyecto,
  resolverAvance,
  resolverInscripciones,
  resolversAutenticacion,
];
