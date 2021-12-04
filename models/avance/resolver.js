
import { avanceModel } from "./avances.js";

const resolverAvance = {
    Query:{
        avances: async(parent, args) => {
            const avances = await avanceModel.find().populate('project');
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