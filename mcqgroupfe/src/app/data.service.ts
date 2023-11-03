// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private backendUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) {}

  getTopics() {
    return this.http.get<any[]>(`${this.backendUrl}/api/topics`);
  }

  getActiveQuizzes() {
    return this.http.get<any[]>(`${this.backendUrl}/api/quizzes/active`);
  }

  getPreviousSubmissions() {
    return this.http.get<any[]>(`${this.backendUrl}/api/submissions/previous`);
  }
}
