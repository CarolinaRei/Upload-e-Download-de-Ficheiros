import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Todo } from '../models';
import { TodoRepository } from '../repositories';
export declare class TodoControllerController {
    todoRepository: TodoRepository;
    constructor(todoRepository: TodoRepository);
    create(todo: Omit<Todo, 'id'>): Promise<Todo>;
    count(where?: Where<Todo>): Promise<Count>;
    find(filter?: Filter<Todo>): Promise<Todo[]>;
    updateAll(todo: Todo, where?: Where<Todo>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Todo>): Promise<Todo>;
    updateById(id: string, todo: Todo): Promise<void>;
    replaceById(id: string, todo: Todo): Promise<void>;
    deleteById(id: string): Promise<void>;
}
