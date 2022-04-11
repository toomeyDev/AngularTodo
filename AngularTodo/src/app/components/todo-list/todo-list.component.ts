import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoItems?:TodoItemComponent[];

  constructor() { }

  ngOnInit(): void {
    this.todoItems = [
      new TodoListComponent(),
      new TodoItemComponent(),
      new TodoItemComponent()
    ];
  }

}
