import { Schema, model } from 'mongoose';
import { Enum_TipoObjetivo } from './enums'
import { ProjectModel } from './project';

interface Objetivo{
    descripcion: string;
    tipo: Enum_TipoObjetivo;
}

const objectiveSchema = new Schema<Objetivo>({
    descripcion: {
        type: String,
        required: true,
    },
    tipo:{
        type: String,
        enum: Enum_TipoObjetivo,
        required: true,
    },
})

const ObjectiveModel = model('Objetivo', objectiveSchema);

export {ObjectiveModel}; 