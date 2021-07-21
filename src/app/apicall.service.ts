import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoList } from './shared/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { }
  getTodoList(): Observable<TodoList[]>{
    return this.http.get<TodoList[]>('https://60f340396d44f30017788915.mockapi.io/api/v1/tasks')
  }
}
