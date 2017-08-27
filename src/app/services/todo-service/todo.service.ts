import { Injectable } from '@angular/core';

import { Todo } from '../../classes/todo';

import { TODOS } from './mock-todos';

function delayedResolver(data?: any): Promise<any> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

@Injectable()
export class TodoService {

  getTodos(): Promise<Todo[]> { return delayedResolver(TODOS); }

  addTodo(task: string): Promise<Todo> {
    const todo = new Todo(Math.random(), task);
    return delayedResolver(todo).then(resolved => {
      TODOS.push(todo);
      return resolved;
    });
  }

  removeTodo(todo: Todo): Promise<Todo> {
    return delayedResolver().then(resolved => {
      const indexOfTodo = TODOS.findIndex(_todo => _todo.id === todo.id);
      if (indexOfTodo !== -1) {
        TODOS.splice(indexOfTodo, 1);
      }
      return resolved;
    });
  }

}
