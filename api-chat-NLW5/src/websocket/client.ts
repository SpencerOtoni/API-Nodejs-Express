import { io } from '../app'
import { ConnectionsService } from '../services/ConnectionsServices'
import { UsersService } from '../services/UsersServices'
import { MessagesServices } from '../services/MessagesServices'

interface IParams {
    text: string,
    email: string
}

interface IConnection {
    socket_id: string;
    user_id: string;
    admin_id?: string;
    id?: string;
  }

io.on('connect', (socket) => {
    const connectionsService = new ConnectionsService()
    const usersService = new UsersService()
    const messagesServices = new MessagesServices()

    socket.on('client_first_access', async (params: IParams)  => {
        const { text, email } = params as IParams

        let user = await usersService.findByEmail(email)

        if(!user){
            const user = await usersService.create(email)
        }

        let connection: IConnection = await connectionsService.findByUserId(user.id);
        if (!connection) {
            connection = {
              socket_id: socket.id,
              user_id: user.id,
            };
          } else{
            connection.socket_id = socket.id;
          }

        await connectionsService.create(connection)
        await messagesServices.create({
            text,
            user_id: user.id,
        })

        const allMessages = await messagesServices.ListByUser(user.id)

        socket.emit("client_list_all_messages", allMessages)
    })

    socket.on('client_sent_message', async (params) => {
        const { text, admin_socket_id } = params;

        const { user_id } = await connectionsService.getBySocketId(socket.id);
        const message = await messagesServices.create({
          text,
          user_id,
        });

        io.to(admin_socket_id).emit('admin_receive_message', {
            message,
            socket_id: socket.id,
        });
    });
})
