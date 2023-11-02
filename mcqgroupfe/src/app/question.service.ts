import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = 'http://localhost:8081/questions';

  constructor(private http: HttpClient) { }

  getQuestionsByTopicId(topicId: number): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/byTopicId/${topicId}`);
  }

  addQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(`${this.apiUrl}/add`, question);
  }

  editQuestion(questionId: number, updatedQuestion: Question): Observable<Question> {
    return this.http.put<Question>(`${this.apiUrl}/update/${questionId}`, updatedQuestion);
  }

  deleteQuestion(questionId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/edit/${questionId}`);
  }
  
}
