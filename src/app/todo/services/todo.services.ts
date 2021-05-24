import {Injectable} from '@angular/core';
import {Storage} from './storage.services';
import {Keys} from "../../../constants/keys";

export enum Status {
  NEW = 'new',
  DONE = 'done'
}

export interface Todo {
  id: number;
  title: string;
  status: Status;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})

export class TodoServices {
  constructor(private storage: Storage){}

  todos: Todo[] = this.storage.get(Keys.Todos);

  getAll(): Todo[] {
    return this.todos;
  }

  filterByStatusDone() {
    return this.todos.filter(status => {
      return status.status === Status.DONE;
    });
  }

  filterByStatusNew() {
    return this.todos.filter(status => {
      return status.status === Status.NEW;
    });
  }

  create(title: string): void {
    this.todos.push({
      id: this.todos.length + 1,
      title,
      status: Status.NEW,
      createdAt: new Date()
    });

    this.storage.set(Keys.Todos, this.todos);
  }

  changeStatus(id: number) {
    const founded = this.todos.find((item) => {
      return item.id === id;
    });

    if (founded) {
      founded.status = Status.DONE;
    }
  }

  sortByNew() {
    const cloned = [...this.todos]
    return cloned.sort((a, b) => {
      return <any>new Date(a.createdAt) - <any>new Date(b.createdAt);
    })
  }

  sortByOld() {
    const cloned = [...this.todos]
    return cloned.sort((a, b) => {
      return <any>new Date(b.createdAt) - <any>new Date(a.createdAt);
    })
  }

  filterByTitle(title:string) {
    return this.todos.filter(todo => {
     return todo.title.toLowerCase().includes(title.toLowerCase().trim());
    })
  }
}
