import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TareasService} from './../services/tareas.service'
@UseGuards(JwtAuthGuard)
@Controller('api/tareas')
export class TareasController {
    constructor(
        private tareasService: TareasService
    ){}    
    @Get()
    getAll(){
        return this.tareasService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: any){
        return this.tareasService.findOne(id);
    }
    @Post()
    create(@Body() body: any){
        return this.tareasService.create(body);
    }
    
    @Put(':id')
    update(@Param('id') id: number, @Body() body:any){
        return this.tareasService.update(id,body);
    }
        
    @Delete(':id')
    delete(@Param('id') id:number){
        return this.tareasService.delete(id);
    }
}
