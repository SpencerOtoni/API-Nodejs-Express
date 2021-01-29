import databaseConfig from '../config/database'

class Database {
    constructor(){
        this.connection = databaseConfig
    }

    query(query, parametros = ' ') {
        return new Promise((resolve, reject) =>{
            this.connection.query(query, parametros, (error, result)=>{
                if(error){
                    return reject(error)
                }

                return resolve(result)

            })
        })
        
    }
}

export default new Database()