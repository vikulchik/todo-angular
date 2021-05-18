import {Injectable} from '@angular/core';

export enum Status {
  NEW = 'new',
  DONE = 'done'
}

export interface Todo {
  id: number;
  title: string;
  status: Status;
}

@Injectable({
  providedIn: 'root'
})

export class TodoServices {
  todos: Todo[] = [
    {
      id: 1,
      title: 'to make a coffee',
      status: Status.NEW,
    },
    {
      id: 2,
      title: 'to work',
      status: Status.NEW,
    },
    {
      id: 3,
      title: 'to feed a dog',
      status: Status.NEW,
    },
    {
      id: 4,
      title: 'to drip eyes',
      status: Status.NEW,
    }
  ];

  getAll(): Todo[] {
    return this.todos;
  }

  fitlerByStatusDone() {
    const todoFilterByStatusDone =  this.todos.filter(status => {
        return status.status ===  Status.DONE;
    });
  }

  fitlerByStatusNew() {
    const todoFilterByStatusNew = this.todos.filter(status => {
      return status.status ===   Status.NEW;
    });
  }

  create(title: string): void {
    this.todos.push({
      id: this.todos.length + 1,
      title,
      status: Status.NEW,
    });
  }

  changeStatus(id: number) {
    const founded = this.todos.find((item) => {
      return item.id === id;
    });

    if (founded) {
      founded.status = Status.DONE;
    }
  }
}
