import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepo: Repository<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    return await this.todoRepo.save(createTodoDto);
  }

  async findAll() {
    return await this.todoRepo.find();
  }

  findOne(id: string) {
    const currentItem = this.todoRepo.findBy({ id: In([id]) });
    return currentItem;
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    this.todoRepo.update(id, updateTodoDto);
    return `updated ${id} successfully`;
  }

  remove(id: string) {
    this.todoRepo.delete(id);
    return `deleted ${id} successfully`;
  }
}
