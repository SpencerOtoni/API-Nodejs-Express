import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcryptjs'

import database from '../../database'

class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public password_hash!: string;
    public readonly createAt: Date;
    public readonly updateAt: Date;

    public async checkPassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password)
    }
}

User.init(
    {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
    },
    {
        sequelize: database,
        freezeTableName: true
    }
)

 User.addHook(
    'beforeSave',
    async (user: User): Promise<void> => {
        if(user.password) {
            user.password_hash = await bcrypt.hash(user.password, 8)
        }
    }
) 

export default User