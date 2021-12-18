import mongoose from 'mongoose';
import { ProjectModel } from '../proyecto/proyecto.js';

const {Schema, model} = mongoose;

// interface Avances{

//     fecha: Date, 
//     descripcion: string;
//     observaciones: [string];
//     proyecto: Schema.Types.ObjectId;
//     creadoPor: Schema.Types.ObjectId;
// }

const avanceSchema = new Schema({
    fecha:{
        type: Date,
        required: true,
    },
    descripcion:{
        type: String,
        required:true,
    },
    observaciones: [
        {
            type: String,
        }
    ],
    proyecto:{
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required: true,    
    },

});

const avanceModel = model('Avance', avanceSchema);

export{avanceModel};