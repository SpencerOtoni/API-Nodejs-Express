import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

import { User } from './User'

@Entity('connections')
class Connection {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    admin_id: string

    @Column()
    socket_id: string

    @Column()
    user_id: string

    @ManyToOne(() => User)
    @JoinColumn({name: 'user_id'})
    user: User

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export { Connection }
