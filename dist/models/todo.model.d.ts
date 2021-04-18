import { Entity } from '@loopback/repository';
export declare class Todo extends Entity {
    id?: string;
    nome: string;
    marca: string;
    [prop: string]: any;
    constructor(data?: Partial<Todo>);
}
export interface TodoRelations {
}
export declare type TodoWithRelations = Todo & TodoRelations;
