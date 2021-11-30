import { connect } from "mongoose";

const conectarBD = async() => {
    return await connect("mongodb+srv://brysagix:admin@cluster0.3pttl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(()=>{
        console.log('conexion exitosa');
    })
    .catch((e)=>{
        console.error("error conectando a la bd", e)
    })
}

export default conectarBD;