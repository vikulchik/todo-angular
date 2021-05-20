import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo, TodoServices} from "./services/todo.services";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  newTodo = '';
  public todos!: Todo[];

  constructor(private todoService: TodoServices) {}

  getAll(): Todo[] {
    return this.todoService.getAll();
  }

  fitlerByStatusNew() {
    this.todos = this.todoService.fitlerByStatusNew();
  }

  fitlerByStatusDone() {
    this.todos = this.todoService.fitlerByStatusDone();
  }

  sortByNew() {
    this.todoService.sortByNew()
  }

  sortByOld() {
    this.todoService.sortByOld()
  }

  reset() {
    this.todos = this.todoService.getAll();
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
    this.todos = this.todoService.getAll();
  }
}
