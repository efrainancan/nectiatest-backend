import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Tarea{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    asunto: string;
    @Column()
    prioridad: string;
    @Column()
    comentario: string;
    @Column()
    asignado: string;    
}