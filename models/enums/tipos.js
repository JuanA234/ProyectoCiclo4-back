import { gql } from "apollo-server-core";

const tiposEnums = gql`


 enum Enum_EstadoProyecto {
     INACTIVO
     ACTIVO 
 }
 enum Enum_FaseProyecto {
     INICIADO 
     EN_DESARROLLO 
     TERMINADO 
     NULA
 }

 enum Enum_TipoObjetivo {
     GENERAL
     ESPECIFICO

 }

 
`

export { tiposEnums };