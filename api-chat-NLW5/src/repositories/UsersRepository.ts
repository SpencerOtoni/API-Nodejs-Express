import { EntityRepository, Repository } from 'typeorm'

import { User } from '../models/User'

@EntityRepository(User)
class UserSRepository extends Repository<User> {}

export { UserSRepository }
