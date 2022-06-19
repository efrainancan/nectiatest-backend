import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TareasModule } from './tareas/tareas.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nectiano',
      password: 'nectiano',
      database: 'newnectiano',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay:3000,
      retryAttempts:10
    }),
    TareasModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
