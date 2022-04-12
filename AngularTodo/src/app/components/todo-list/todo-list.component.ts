import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoStorageService } from 'src/app/todo-storage.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [ TodoStorageService ]
})
export class TodoListComponent implements OnInit {

  todoItems?:TodoItemComponent[];
  inputName?:String="";
  inputDescription?:String="";

  constructor(private service: TodoStorageService) { }

  ngOnInit(): void {   
    // load in any tasks present in the storage service
    this.load();

    // populate the application with some sample tasks if none are present at first init
    this.checkEmpty();
  }

  toggleFinished(id:number) {
    this.todoItems?.map((value, index) => {
      if (index == id) value.isComplete = !value.isComplete; // toggle isComplete to track whether a task is done or not 
    })
  }

  // check if the todoItems array is null, if yes then assign default values to populate application
  checkEmpty(): void{
    if(!this.todoItems){
      this.todoItems = [
        new TodoItemComponent(
          "A task which needs to be completed",
          "This task urgently needs to be completed."
        ),
        new TodoItemComponent(
          "Go to the grocery store",
          "Need to buy food at the grocery store."
        ),
        new TodoItemComponent(
          "Write a todo list",
          "Need to remember to write a todo list."
        )
      ]      
    }
  }

  deleteItem(id:number) {
    this.todoItems = this.todoItems?.filter((value, i) => i != id); 
    // filter out items matching the current index where method is triggered
  }

  addItem(): void {
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

  // handle saving task data to the storage service
  save(): void {
    let stringOut = JSON.stringify(this.todoItems)
    this.storeItem(stringOut);
  }

  // handle loading task data from the storage service
  load(): void {
    this.todoItems = this.service.getTodoItems();
  }

  // reset tasks to default sample values
  reset(): void {
    this.todoItems = [];
    this.service.clear();
    this.checkEmpty();
  }

  // store an item into the todo storage service
  storeItem(value?): void {
    this.service.setItem('todoItemStorage', value);
  }

  // get an item from the todo storage service
  getItem(value?): string | null {
    return this.service.getItem(value);
  }

  // get the task objects currently stored from the todo storage service
  getTodoItems(): any {
    return this.service.getTodoItems();
  }

}
