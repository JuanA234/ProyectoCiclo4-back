import { connect } from "mongoose";

const conectarBD = async() => {
    return await connect("mongodb+srv://Admin:admin@cluster0.kfz33.mongodb.net/Test?retryWrites=true&w=majority")
    .then(()=>{
        console.log('conexion exitosa');
    })
    .catch((e)=>{
        console.error("error conectando a la bd", e)
    })
}

export default conectarBD;