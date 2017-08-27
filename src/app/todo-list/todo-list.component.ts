import { Component, Input } from '@angular/core';

import { Todo } from '../classes/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() title: string;

  @Input() todos: Todo[];

}
