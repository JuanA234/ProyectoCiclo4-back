<<<<<<< HEAD
import { resolversProyecto } from '../models/proyecto/resolvers.js';
import { resolversUsuario } from '../models/usuario/resolvers.js';
import { resolversAvance } from '../models/avance/resolvers.js';
import { resolverInscripciones } from '../models/inscripcion/resolvers.js';
import { resolversAutenticacion } from './auth/resolvers.js';

export const resolvers = [
  resolversUsuario,
  resolversProyecto,
  resolversAvance,
  resolverInscripciones,
  resolversAutenticacion,
];
=======
import { resolverAvance } from "../models/avance/resolver.js";
import { resolverProyecto } from "../models/proyecto/resolver.js";

export const resolvers = [resolverProyecto, resolverAvance]
>>>>>>> 0a3560b6abb1518724f4507924b6c115d5835861
