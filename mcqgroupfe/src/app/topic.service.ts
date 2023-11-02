import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
 
  private baseUrl = 'http://localhost:8081/topics';

  constructor(private http: HttpClient) {}

  getAllTopics() {
    return this.http.get<any[]>(`${this.baseUrl}/getall`);
  }

  addTopic(topic: { topicName: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, topic);
  }

  deleteTopic(topicId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/${topicId}`);
  }

}
