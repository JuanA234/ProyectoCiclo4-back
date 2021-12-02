import conectarBD from "./db/db";
import   UserModel  from "./models/user";
import { Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo  } from "./models/enums";
import { ProjectModel } from "./models/project";
import { ObjectiveModel } from "./models/objective";

//METODOLOGÍAS ONE TO MANY

//METODOLOGÍA ONE TO MANY #1
const crearProyectoConObjetivos1 = async () =>{
    const usuarioInicial = await UserModel.create({
        apellido: 'Avelardo',
        correo : 'lasas@ds.com',
        identificacion: '234sw1y5',
        nombre: 'Luis',
        rol: Enum_Rol.administrador, 
        estado: Enum_EstadoUsuario.autorizado,
         })
    
    const proyectoCreado = await ProjectModel.create({
    nombre: 'Proyecto Mision TIC',
    fechaInicio: new Date("2021/12/24"),
    fechaFinal: new Date('2022/12/24'),
    presupuesto: 122000,
    lider: usuarioInicial._id,
    })
    
    const objetivoGeneral = await ObjectiveModel.create({
    descripcion:'este es el objetivo general',
    tipo: Enum_TipoObjetivo.general,
    proyecto: proyectoCreado._id,
    })
    
    const objetivoEspecifico1 = await ObjectiveModel.create({
    descripcion:'este es el objetivo especifico 1',
    tipo: Enum_TipoObjetivo.especifico,
    proyecto: proyectoCreado._id,
    })
    
    const objetivoEspecifico2 = await ObjectiveModel.create({
    descripcion:'este es el objetivo especifico 2',
    tipo: Enum_TipoObjetivo.especifico,
    proyecto: proyectoCreado._id,
    })
}
const consultaProyectoConObjetivos1 = async () => {

    const proyecto = await ProjectModel.findOne({ _id: "61a6f63af12df081750141c9"});
    
    console.log('el proyecto que encontre fue ', proyecto);
    
     const objetivos = await ObjectiveModel.find({project: "61a6f63af12df081750141c9"});
    
     console.log('Los objetivos del proyecto son ', objetivos);
    
     const proyectoConObjetivos = {... proyecto, objetivos: objetivos}
    
     console.log('el proyecto con objetivos es: ', proyectoConObjetivos);
}

// METODOLOGÍA ONE TO MANY #2
const crearProyectoConObjetivos2 = async () =>{

    
    const usuarioInicial = await UserModel.create({
        apellido: 'Avelardo',
        correo : 'lasas@ds.com',
        identificacion: '234sw1y5',
        nombre: 'Luis',
        rol: Enum_Rol.administrador, 
        estado: Enum_EstadoUsuario.autorizado,
         })
    
         
         const objetivoGeneral = await ObjectiveModel.create({
             descripcion:'este es el objetivo general',
             tipo: Enum_TipoObjetivo.general,
            })
            
            const objetivoEspecifico1 = await ObjectiveModel.create({
                descripcion:'este es el objetivo especifico 1',
                tipo: Enum_TipoObjetivo.especifico,
            })
            
            const objetivoEspecifico2 = await ObjectiveModel.create({
                descripcion:'este es el objetivo especifico 2',
                tipo: Enum_TipoObjetivo.especifico,
            })
            const proyectoCreado = await ProjectModel.create({
            nombre: 'Proyecto Mision TIC',
            fechaInicio: new Date("2021/12/24"),
            fechaFinal: new Date('2022/12/24'),
            presupuesto: 122000,
            lider: usuarioInicial._id,
            objetivos: [
                objetivoGeneral._id,
                objetivoEspecifico1._id,
                objetivoEspecifico2._id,
            ]
            })
}
const consultaProyectoConObjetivos2 = async () => {
    
        const proyecto = await ProjectModel.find({id: "61a7844f2d2a9ed7fd164983"}).populate(
            'objetivos'
        );
    
        console.log("Proyecto encontrado", JSON.stringify(proyecto));
};

// METODOLOGÍA ONE TO MANY #3
const crearProyectoConObjetivos3 = async () =>{

    const usuarioInicial = await UserModel.create({
        apellido: 'Avelardo',
        correo : 'lasas@ds.com',
        identificacion: '234sw1y5',
        nombre: 'Luis',
        rol: Enum_Rol.administrador, 
        estado: Enum_EstadoUsuario.autorizado,
         })
    
    const proyectoCreado = await ProjectModel.create({
        nombre: 'Proyecto Mision TIC',
        fechaInicio: new Date("2021/12/24"),
        fechaFinal: new Date('2022/12/24'),
        presupuesto: 122000,
        lider: usuarioInicial._id,
        objetivos: [
            {descripcion: 'Este es el objetivo general', tipo: Enum_TipoObjetivo.general},
            {descripcion: 'Este es el objetivo especifico 1', tipo: Enum_TipoObjetivo.especifico},
            {descripcion: 'Este es el objetivo especifico 2', tipo: Enum_TipoObjetivo.especifico},
        ]
    })
}
const consultaProyectoConObjetivos3 = async () => { 
    const proyectoCreado = await ProjectModel.find({id: "61a79a48629babb06e0fb4ce"});
    console.log('proyecto ', proyectoCreado);
}
const main = async () => {
    await conectarBD();

}; 
        
main();

// CRUD USUARIOS

// // CREAR UN USUARIO
// await UserModel.create({
//     apellido: 'Avendaño',
//     correo : 'lasa.s@ccccom',
//     identificacion: '234swy5',
//     nombre: 'Juan',
//     rol: Enum_Rol.administrador,    
// })
// .then((u) => {
//     console.log('usuario creado', u);
// }).catch((e) => {
//     console.error("Error creando el usuario", e)
// })

//     //OBTENER LOS USUARIOS
// await UserModel.find()
// .then((u) => {
//     console.log('usuarios', u)
// })
// .catch((e)=>{
//     console.error('Error obteniendo los usuarios', e)
// })

// EDITAR UN USUARIO
// await UserModel.findOneAndUpdate({
//     identificacion: "12323"
// },
// {
//     nombre: "Lucas",
//     apellido: "Felipe",
// })
// .then((u)=>{
//     console.log("usuario actualizado", u);
// })
// .catch((e)=>{
//     console.error('Error actualizando vehículo', e)
// })

//ELIMINAR UN USUARIO
// await UserModel.findOneAndDelete({
//     identificacion: "12323"
// })
// .then((u)=>{
//     console.log('usuario eliminado ', u)
// })
// .catch((e)=>{
//     console.error(e)
// })