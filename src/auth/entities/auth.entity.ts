import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Auth{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    login: string;
    @Column()
    password: string;
    @Column()
    nombre: string;
    @Column()
    estado: boolean;    
}