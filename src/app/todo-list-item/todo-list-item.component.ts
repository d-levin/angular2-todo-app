import { Component, Input } from '@angular/core';

import { Todo } from '../classes/todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {

  @Input() todo: Todo;

  buttonLabel(): string { return this.todo.done ? 'Undo' : 'Done'; }

  toggle(): void { this.todo.done = !this.todo.done; }

}
