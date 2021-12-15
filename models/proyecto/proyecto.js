import mongoose from 'mongoose';

const { Schema, model } = mongoose;
// interface Proyecto{
//     nombre: string;
//     presupuesto: number;
//     fechaInicio: Date;
//     fechaFinal: Date;
//     estado: Enum_EstadoProyecto;
//     fase: Enum_FaseProyecto;
//     lider: Schema.Types.ObjectId;
//     objetivos:[{descripcion: string; tipo: Enum_TipoObjetivo}];
// }

const projectSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },

    presupuesto: {
        type: Number,
        required: true,
    },

    fechaInicio: {
        type: Date,
        required: true,
    },

    fechaFinal: {
        type: Date,
        required: true,
    },

    estado: {
        type: String,
        enum: ["INACTIVO", "ACTIVO"],
        default: "INACTIVO",
    },
    fase: {
        type: String,
        enum: ["INICIADO", "EN_DESARROLLO", "TERMINADO", "NULO"],
        default: "NULO",
    },
    // lider: {
    //     type: Schema.Types.ObjectId,
    //     required: true,
    //     ref: UserModel,
    // },  
    objetivos: [
        {
            descripcion: {
                type: String,
                required: true,
            },
            tipo: {
                type: String,
                enum: ["GENERAL", "ESPECIFICO"],
                required: true,
            }
        }
    ]
},
{
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true } // So `console.log()` and other functions that use `toObject()` include virtuals
  
}
);

projectSchema.virtual('avances',{
    ref: "Avance",
    localField: '_id',
    foreignField: 'proyecto',               
})

const ProjectModel = model('Proyecto', projectSchema, 'Proyectos');

export { ProjectModel };