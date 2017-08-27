import { Component, OnInit } from '@angular/core';

import { Todo } from './classes/todo';

import { TodoService } from './services/todo-service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  incomplete(): Todo[] { return this.todos.filter(todo => !todo.done); }

  completed(): Todo[] { return this.todos.filter(todo => todo.done); }

  constructor(private todoService: TodoService) { }

  getTodos(): void {
    this.todoService.getTodos().then(todos => this.todos = todos);
  }

  ngOnInit(): void {
    this.getTodos();
  }

}
