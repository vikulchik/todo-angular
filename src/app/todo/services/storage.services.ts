import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Storage {
  set(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value))
  }

  get(key: string) {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }
}
