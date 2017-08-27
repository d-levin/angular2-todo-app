import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {

  @Input() todo: Todo;

  @Output() onRemove = new EventEmitter<Todo>();

  remove(): void { this.onRemove.emit(this.todo); }

  toggle(): void { this.todo.done = !this.todo.done; }

}
