import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() name?:String;
  @Input() description?:String;
  @Input() isComplete?:boolean;

  constructor(name:String="Name", description:String="Description") { 
    this.name = name;
    this.description = description;
    this.isComplete = false;
  }

  ngOnInit(): void {

  }

}