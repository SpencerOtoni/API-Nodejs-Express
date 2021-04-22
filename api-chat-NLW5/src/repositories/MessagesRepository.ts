import {Repository, EntityRepository } from 'typeorm'

import {Message} from '../models/Message'

@EntityRepository(Message)
class MessagesRepository extends Repository<Message>{}

export { MessagesRepository }
