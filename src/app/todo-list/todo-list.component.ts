import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() title: string;

  @Input() todos: Todo[];

  @Output() onRemove = new EventEmitter<Todo>();

  remove(todo: Todo): void { this.onRemove.emit(todo); }

}
