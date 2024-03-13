import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todos/entities/todo.entity';
import { config } from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), TodosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
