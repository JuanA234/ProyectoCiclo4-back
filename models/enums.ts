
enum Enum_Rol {
    estudiante = "Estudiante", 
    lider = "Líder",
    administrador = "Administrador"
}

enum Enum_EstadoUsuario {
    pendiente = "Pendiente", 
    autorizado = "Autorizado",
    no_autorizado = "No autorizado"
}

enum Enum_EstadoProyecto{
    inactivo = "Inactivo",
    activo = "Activo"
}

enum Enum_FaseProyecto{
    iniciado = "Iniciado",
    en_desarrollo = "En desarrollo",
    terminado = "Terminado",
    nula = '',
}

enum Enum_TipoObjetivo{
    general = " Generales",
    especifico = 'Especificos',

}
export { Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo};