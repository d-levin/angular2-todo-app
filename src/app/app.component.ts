import { Component, OnInit } from '@angular/core';

import { Todo } from './models/todo';

import { TodoService } from './services/todo-service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loading = false;

  task = '';

  todos: Todo[] = [];

  get incomplete(): Todo[] { return this.todos.filter(todo => !todo.done); }

  get completed(): Todo[] { return this.todos.filter(todo => todo.done); }

  constructor(private todoService: TodoService) { }

  add(): void {
    if (this.task) {
      this.loading = true;
      this.todoService.addTodo(this.task).then(() => {
        this.task = '';
        this.loading = false;
      });
    }
  }

  remove(todo: Todo): void { this.todoService.removeTodo(todo); }

  private getTodos(): void { this.todoService.getTodos().then(todos => this.todos = todos); }

  ngOnInit(): void { this.getTodos(); }

}
