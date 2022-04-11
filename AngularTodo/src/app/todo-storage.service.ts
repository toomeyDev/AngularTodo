import { Injectable } from '@angular/core';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {

  // keep track of todo item components for persistent storage
  todoItemStorage:string[] = []

  constructor() { }

  public setItem(key: string, value: string){
    localStorage.setItem(key, value);
  }

  public getItem(key: string) {
    return localStorage.getItem(key);
  }

  public getTodoItems() {
    return this.todoItemStorage;
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }
}
