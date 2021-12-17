import { avanceModel } from "./avance.js";

const resolverAvance = {
    Query:{
        Avances: async(parent, args) => {
            const avances = await avanceModel.find().populate('proyecto');
            return avances;
        },
        filtrarAvance: async(parent, args)=>{
            const avanceFiltrado = await avanceModel.find({proyecto: args.idProyecto }).populate("proyecto");
            return avanceFiltrado;
        }
    },

    Mutation:{
        crearAvance: async(parent, args) => {
            const avanceCreado = avanceModel.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
            });
            return avanceCreado;
        },
    }
}

export {resolverAvance};