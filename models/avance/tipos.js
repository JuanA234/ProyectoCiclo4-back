<<<<<<< HEAD
import { gql } from 'apollo-server-express';

const tiposAvance = gql`
  type Avance {
    _id: ID!
    fecha: Date!
    descripcion: String!
    observaciones: [String]
    proyecto: Proyecto!
    creadoPor: Usuario!
  }

  type Query {
    Avances: [Avance]
    filtrarAvance(_id: String!): [Avance]
  }
  type Mutation {
    crearAvance(fecha: Date!, descripcion: String!, proyecto: String!, creadoPor: String!): Avance
  }
`;

export { tiposAvance };
=======
import { gql } from "apollo-server-express";
const tiposAvance = gql`
 
 scalar Date

 type Avance{

     _id: ID!
     descripcion: String!
     fecha: Date!
     proyecto: Proyecto!
     observaciones: [String]
 }

 type Query{
     Avances: [Avance]
     filtrarAvance(idProyecto: String!): [Avance]
 }

 type Mutation{
     crearAvance(descripcion: String!, fecha: Date!, proyecto: String!) : Avance
 }
`

export {tiposAvance};
>>>>>>> 0a3560b6abb1518724f4507924b6c115d5835861
