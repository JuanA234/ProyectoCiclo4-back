import { gql } from 'apollo-server-express';

const tiposProyecto = gql`


    type Objetivo{
        _id: ID!
        descripcion: String!,
        tipo:Enum_TipoObjetivo!
    }

    input crearObjetivo{
        descripcion: String!,
        tipo:Enum_TipoObjetivo!
    } 

    input camposObjetivo{
        descripcion: String!,
        tipo: Enum_TipoObjetivo!
    }

    input camposProyecto{
        nombre: String
        presupuesto: Float
        fechaInicio: Date
        fechaFinal: Date
        estado: Enum_EstadoProyecto
        fase: Enum_FaseProyecto
        # lider: 
    }


    type Proyecto {
        _id: ID!
        nombre: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFinal: Date!
        estado: Enum_EstadoProyecto!
        fase: Enum_FaseProyecto!
        # lider:
        objetivos:[Objetivo]
        avances: [Avance]
    }

    type Query{
       Proyectos: [Proyecto]
    }

    type Mutation{
        crearProyecto(
        nombre: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFinal: Date!
        estado: Enum_EstadoProyecto!
        fase: Enum_FaseProyecto!
        # lider:
        objetivos:[crearObjetivo]
        ): Proyecto

        editarProyecto(id: String!,campos: camposProyecto!): Proyecto

        crearObjetivo(idProyecto: String!,campos: camposObjetivo!):Proyecto

        editarObjetivo(idProyecto:String!, indexObjetivo:Int!, campos:camposObjetivo!):Proyecto

        eliminarObjetivo(idProyecto: String!, idObjetivo: String!): Proyecto    

    }
`


export { tiposProyecto };

