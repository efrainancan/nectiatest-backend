import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarea } from '../entities/tareas.entity'

@Injectable()
export class TareasService {
    constructor(
        @InjectRepository(Tarea) private tareaRepo: Repository<Tarea>
    ){}

    findAll(){
        return this.tareaRepo.find();
    }
    findOne(id: number):Promise<Tarea>{
        return this.tareaRepo.findOne({select: ['asunto','prioridad','comentario','asignado'],
        where: {id},
      });
    }
    create(body: any){
        const nuevaTarea= this.tareaRepo.create(body);
        return this.tareaRepo.save(nuevaTarea)
    }
    async update(id: number, body: any){
        const tarea= await this.tareaRepo.findOne({select: ['asunto','prioridad','comentario','asignado'],
        where: {id},
      });
        this.tareaRepo.merge(tarea, body);
        return this.tareaRepo.save(tarea);
    }
    async delete(id: number){
        await this.tareaRepo.delete(id)
        return true;
    }
}
