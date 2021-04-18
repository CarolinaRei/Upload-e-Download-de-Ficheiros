"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoControllerController = void 0;
const tslib_1 = require("tslib");
// ---------- ADD IMPORTS -------------
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TodoControllerController = class TodoControllerController {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async create(todo) {
        return this.todoRepository.create(todo);
    }
    async count(where) {
        return this.todoRepository.count(where);
    }
    async find(filter) {
        return this.todoRepository.find(filter);
    }
    async updateAll(todo, where) {
        return this.todoRepository.updateAll(todo, where);
    }
    async findById(id, filter) {
        return this.todoRepository.findById(id, filter);
    }
    async updateById(id, todo) {
        await this.todoRepository.updateById(id, todo);
    }
    async replaceById(id, todo) {
        await this.todoRepository.replaceById(id, todo);
    }
    async deleteById(id) {
        await this.todoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/todos'),
    rest_1.response(200, {
        description: 'Todo model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Todo) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Todo, {
                    title: 'NewTodo',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoControllerController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/todos/count'),
    rest_1.response(200, {
        description: 'Todo model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Todo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoControllerController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/todos'),
    rest_1.response(200, {
        description: 'Array of Todo model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Todo, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Todo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoControllerController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/todos'),
    rest_1.response(200, {
        description: 'Todo PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Todo, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Todo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Todo, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/todos/{id}'),
    rest_1.response(200, {
        description: 'Todo model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Todo, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Todo, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoControllerController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/todos/{id}'),
    rest_1.response(204, {
        description: 'Todo PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Todo, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Todo]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/todos/{id}'),
    rest_1.response(204, {
        description: 'Todo PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Todo]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/todos/{id}'),
    rest_1.response(204, {
        description: 'Todo DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoControllerController.prototype, "deleteById", null);
TodoControllerController = tslib_1.__decorate([
    authentication_1.authenticate('jwt') // <---- Apply the @authenticate decorator at the class level
    ,
    tslib_1.__param(0, repository_1.repository(repositories_1.TodoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TodoRepository])
], TodoControllerController);
exports.TodoControllerController = TodoControllerController;
//# sourceMappingURL=todo-controller.controller.js.map