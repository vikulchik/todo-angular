import {Injectable} from '@angular/core';

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
  todos: Todo[] = JSON.parse(localStorage.getItem('Todo') || '[]');

  getAll(): Todo[] {
    return this.todos;
  }

  fitlerByStatusDone() {
    return this.todos.filter(status => {
      return status.status === Status.DONE;
    });
  }

  fitlerByStatusNew() {
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

    localStorage.setItem('Todo', JSON.stringify(this.todos))
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
