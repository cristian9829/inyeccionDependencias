import {IConexion} from './IConnection';

export class ConnectionMySql implements IConexion{
    name: string;
    code: string;
    host: string;
    constructor(name: string, code: string, host: string){
        this.name = name;
        this.code = code;
        this.host = host;
    }
    conectar(): void {
        console.log("Connection sucessfully to BD mysql")
    }
}