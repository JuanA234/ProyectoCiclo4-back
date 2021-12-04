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
       proyectos: [Proyecto]
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
    }
`


export { tiposProyecto };

