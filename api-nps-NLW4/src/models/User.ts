import { BeforeInsert, Column, CreateDateColumn, Entity,
    PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid"

import bcrypt from 'bcryptjs';

@Entity("users")
class User{
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

    async comparePassword(attempt: string): Promise<boolean> {
        return await bcrypt.compare(attempt, this.password);
    }
}

export { User }