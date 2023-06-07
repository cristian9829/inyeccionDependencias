import { ConnectionMongoDB } from "./ConnectionMongoDB"
import { ConnectionMySql } from "./ConnectionMySql"
import { PersonaDaoImpl } from "./PersonaDAOImpl"


const  main = () =>{
    const cx = new ConnectionMySql("mitCode", "7345", 'localhost')
    const cx2 = new ConnectionMongoDB("mitCode", "7345", '192.168.1.1')

    const dao = new PersonaDaoImpl(cx)

    

    dao.listarTodos()
}

main()