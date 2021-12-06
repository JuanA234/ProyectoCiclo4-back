import { ProjectModel } from "./proyecto.js";
const resolverProyecto = {
    Query: {
        proyectos: async (parent, args) => {
            const proyectos = await ProjectModel.find().populate("avances");
            return proyectos;
        },
    },

    Mutation: {
        crearProyecto: async (parent, args) => {
            const proyectoCreado = await ProjectModel.create({
                nombre: args.nombre,
                estado: args.estado,
                fase: args.fase,
                fechaInicio: args.fechaInicio,
                fechaFinal: args.fechaFinal,
                presupuesto: args.presupuesto,
                objetivos: args.objetivos,
            })
            return proyectoCreado;
        }
    },
}

export { resolverProyecto };