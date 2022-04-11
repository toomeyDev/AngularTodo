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

  toggleFinished(id:number) {
    this.todoItems?.map((value, index) => {
      if (index == id) value.isComplete = !value.isComplete; // toggle isComplete to track whether a task is done or not 
    })
  }

  deleteItem(id:number) {
    this.todoItems = this.todoItems?.filter((value, i) => i != id); 
    // filter out items matching the current index where method is triggered
  }

}
