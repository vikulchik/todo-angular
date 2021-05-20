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
  todos: Todo[] = [
    {
      id: 1,
      title: 'to make a coffee',
      status: Status.NEW,
      createdAt: new Date('2021-05-01')
    },
    {
      id: 2,
      title: 'to work',
      status: Status.NEW,
      createdAt: new Date('2021-05-02')
    },
    {
      id: 3,
      title: 'to feed a dog',
      status: Status.NEW,
      createdAt: new Date('2021-05-03')
    },
    {
      id: 4,
      title: 'to drip eyes',
      status: Status.NEW,
      createdAt: new Date('2021-05-04')
    }
  ];

  getAll(): Todo[] {
    return this.todos;
  }

  fitlerByStatusDone() {
    return this.todos.filter(status => {
        return status.status ===  Status.DONE;
    });
  }

  fitlerByStatusNew() {
    return this.todos.filter(status => {
      return status.status ===   Status.NEW;
    });
  }

  create(title: string): void {
    this.todos.push({
      id: this.todos.length + 1,
      title,
      status: Status.NEW,
      createdAt: new Date()
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

  sortByNew() {
    this.todos.sort((a, b) => {
      return <any>new Date(a.createdAt) - <any>new Date(b.createdAt);
    })
  }

  sortByOld() {
    this.todos.sort((a, b) => {
      return <any>new Date(b.createdAt) - <any>new Date(a.createdAt);
    })
  }
}
