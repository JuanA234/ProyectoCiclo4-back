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
     avances: [Avance]
     filtrarAvance(_id: String!): [Avance]
 }

 type Mutation{
     crearAvance(
     descripcion: String!
     fecha: Date!
     proyecto: String!
     ) : Avance
 }
`

export {tiposAvance};