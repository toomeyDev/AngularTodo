import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoItems?:TodoItemComponent[];
  inputName?:String="";
  inputDescription?:String="";

  constructor() { }

  ngOnInit(): void {
    this.todoItems = [
      new TodoItemComponent("Task", "A task that needs doing"),
      new TodoItemComponent("Important Task", "An important task."),
      new TodoItemComponent("Buy Groceries", "Need to buy groceries.")
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

  addItem() {
    // assign default values for the forms if none are present at time of method trigger
    if(!this.inputName) this.inputName = "Task Name";
    if(!this.inputDescription) this.inputDescription = "Description";
    this.todoItems?.push(
      new TodoItemComponent(this.inputName, this.inputDescription)
      // add a new task with the given name, description to end of tasks list
    )
    this.inputName=""; 
    this.inputDescription="";
  }

}
