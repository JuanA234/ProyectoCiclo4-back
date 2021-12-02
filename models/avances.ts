import { Schema, model, SchemaTypes } from 'mongoose';
import { Enum_FaseProyecto } from './enums';
import { ProjectModel } from './project';
import UserModel from './user';

interface Avances{

    fecha: Date,
    descripcion: string;
    observaciones: [string];
    proyecto: Schema.Types.ObjectId;
    creadoPor: Schema.Types.ObjectId;
}

const avanceSchema = new Schema<Avances>({
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
    creadoPor:{
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    },

});

const avanceModel = model('Avance', avanceSchema);

export{avanceModel};