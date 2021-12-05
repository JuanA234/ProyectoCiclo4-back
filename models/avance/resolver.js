
import { avanceModel } from "./avances.js";

const resolverAvance = {
    Query:{
        Avances: async(parent, args) => {
            const avances = await avanceModel.find().populate('proyecto');
            return avances;
        },
    },

    Mutation:{
        crearAvance: async(parent, args) => {
            const avanceCreado = avanceModel.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
            });
            return avanceCreado;
        }
    }
}

export {resolverAvance};