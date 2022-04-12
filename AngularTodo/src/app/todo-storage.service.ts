import { Injectable } from '@angular/core';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {

  /* keep track of changes to localstorage for persistent (while browser is open)
  *  storage of tasks present in the application
  */

  constructor() {
  }

  public setItem(key: string, value: string){
    localStorage.setItem(key, value);
  }

  public getItem(key: string) {
    return localStorage.getItem(key);
  }

  public getTodoItems() {
    return JSON.parse(localStorage.getItem('todoItemStorage')!);
  }

  public removeItem(key: string) {
    localStorage.removeItem('todoItemStorage[2]');
  }

  public clear() {
    localStorage.clear();
  }
}
