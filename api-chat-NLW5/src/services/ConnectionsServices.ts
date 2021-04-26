import { getCustomRepository, Repository } from 'typeorm'
import { Connection } from '../models/Connection'
import { ConnectionsRepository } from '../repositories/ConnectionsRepository'

interface IConnectionCreate {
    socket_id: string,
    user_id: string,
    admin_id?: string,
    id?: string
}
class ConnectionsService {
    private connectionsRepository: Repository<Connection>

    constructor(){
        this.connectionsRepository = getCustomRepository(ConnectionsRepository)
    }

    async create({socket_id, user_id, admin_id, id}: IConnectionCreate){
        const connection = this.connectionsRepository.create({
            socket_id,
            user_id,
            admin_id,
            id
        })

        await this.connectionsRepository.save(connection)

        return connection
    }

    async findByUserId(user_id: string){
        const connection = this.connectionsRepository.findOne({
            user_id
        })

        return connection
    }

    async getPending() {
        return await this.connectionsRepository.find({
          where: { admin_id: null },
          relations: ['user'],
        });
    }

    async getBySocketId(socket_id: string) {
        return await this.connectionsRepository.findOne({ socket_id });
    }

    async setAdminId(user_id: string, admin_id: string) {
        await this.connectionsRepository.update({ user_id }, { admin_id });
    }

}

export { ConnectionsService }
