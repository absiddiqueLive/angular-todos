import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

const httpOptions = {
  'headers': new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) { }

  // Rectrive todos from server
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}?_limit=15`)    
  }

  // Toggle todo status to Completed
  toggleCompleted(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;

    return this.http.put<Todo>(url, todo, httpOptions);
  }

  // Delete todo from server
  deteleTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;

    return this.http.delete<Todo>(url,httpOptions);
  }  
}
