import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../jwt-auth.guard';
import { AuthService} from './../services/auth.service'

@Controller('api/auth')
export class AuthController {
    constructor(
        private AuthService: AuthService
    ){}

    @UseGuards(JwtAuthGuard)
    @Get()
    getAll(){
        return this.AuthService.findAll();
    }
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getOne(@Param('id') id: any){
        return this.AuthService.findOne(id);
    }

    @Post('register')
    create(@Body() body: any){
        return this.AuthService.register(body);
    }
    
    @Post('login')
    login(@Body() body: any){
        return this.AuthService.login(body);
    }
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id') id: number, @Body() body:any){
        return this.AuthService.update(id,body);
    }
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    delete(@Param('id') id:number){
        return this.AuthService.delete(id);
    }
}
