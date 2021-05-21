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

  fitlerByStatusNew() {
    this.todos = this.todoService.fitlerByStatusNew();
  }

  fitlerByStatusDone() {
    this.todos = this.todoService.fitlerByStatusDone();
  }

  sortByNew() {
    this.todos = this.todoService.sortByNew()
  }

  sortByOld() {
    this.todos = this.todoService.sortByOld()
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

  filterByTitle(event: any) {
    this.todos = this.todoService.filterByTitle(event.target.value);
  }

  ngOnInit(): void {
    this.todos = this.todoService.getAll()
  }
}
