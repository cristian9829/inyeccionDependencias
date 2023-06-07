import {IConexion} from './IConnection';
import { ICRUD } from './ICrud';


export class PersonaDaoImpl implements ICRUD{
    conexion : IConexion;

    constructor(conexion: IConexion){
        this.conexion = conexion;
    }

    listarTodos(): [] {
        console.log("listado", this.conexion)
        return []
    }

}