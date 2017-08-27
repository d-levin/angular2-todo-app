import { Injectable } from '@angular/core';

import { Todo } from '../../classes/todo';

import { TODOS } from './mock-todos';

function delayedResolver(data: any): Promise<any> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

@Injectable()
export class TodoService {

  getTodos(): Promise<Todo[]> {
    return delayedResolver(TODOS);
  }

}
