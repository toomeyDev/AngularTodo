import { Injectable } from '@angular/core';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {

  // placeholder storage to test service function
  testStorage:string = 'Default';

  // keep track of todo item components for persistent storage
  todoItemStorage:TodoItemComponent[] = [];

  constructor() { }

  public setItem(key: string, value: string){
    localStorage.setItem(key, value);
  }

  public getItem(key: string) {
    return localStorage.getItem(key);
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }
}
