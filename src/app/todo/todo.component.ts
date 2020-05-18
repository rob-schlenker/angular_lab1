import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [
    { task: "Feed the dog", completed: true },
    { task: "Take out the trash", completed: false },
    { task: "Wash the dishes", completed: true }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
