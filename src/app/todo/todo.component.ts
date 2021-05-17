import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo, TodoServices} from "./services/todo.services";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  newTodo = '';

  constructor(private todoService: TodoServices) {
  }

  getAll(): Todo[] {
    return this.todoService.getAll();
  }

  create() {
    const title = this.newTodo.trim();
    if (title) {
      this.todoService.create(title);
      this.newTodo = '';
    }
  }

  deleteTodo(id: number) {
    this.todoService.changeStatus(id);
  }

  ngOnInit(): void {
  }
}
