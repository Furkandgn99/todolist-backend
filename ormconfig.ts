import { Todo } from 'src/todos/entities/todo.entity';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const config: MysqlConnectionOptions = {
  type: 'mariadb',
  database: 'todolistdb',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: '',
  entities: [Todo],
  synchronize: true,
};
