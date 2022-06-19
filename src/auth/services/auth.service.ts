import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from '../entities/auth.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Auth) 
            private AuthRepo: Repository<Auth>,
            private jwtService:JwtService
    ){}

    findAll(){
        return this.AuthRepo.find();
    }
    findOne(id: number):Promise<Auth>{
        return this.AuthRepo.findOne({select: ['id','login','password','nombre','estado'],
        where: {id},
      });
    }
    async register(body: any){
        const plainTextToHash=await bcrypt.hash(body.password,10)        
        body={...body,password:plainTextToHash}        
        const nuevaAuth= this.AuthRepo.create(body);
        return this.AuthRepo.save(nuevaAuth)        
    }
    //LOGIN USERS
    async login(body: any){
        let login=body.login;
        let password=body.password;
        const Authentication= await this.AuthRepo.findOne({select: ['id','login','password','nombre','estado'],where: {login}});        
        if(!Authentication) throw new HttpException('NOT_FOUND',404)
        const check=await bcrypt.compare(password,Authentication.password)
        if(!check) throw new HttpException('NOT_FOUND',403);        
        let payload = { id:Authentication.id,login:Authentication.login };        
        const token = this.jwtService.sign(payload);

        const data={login: Authentication.login, token:token}
        return data;
    }

    async update(id: number, body: any){
        const Auth= await this.AuthRepo.findOne({select: ['login','password','nombre','estado'],
        where: {id},
      });
        this.AuthRepo.merge(Auth, body);
        return this.AuthRepo.save(Auth);
    }
    async delete(id: number){
        await this.AuthRepo.delete(id)
        return true;
    }
}
