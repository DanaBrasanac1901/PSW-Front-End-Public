import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../model/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.apiHost + 'api/Feedback/', { headers: this.headers });
  }

  getFeedback(id: number): Observable<Feedback> {
    return this.http.get<Feedback>(this.apiHost + 'api/Feedback/' + id, { headers: this.headers });
  }

  deleteFeedback(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/Feedback/' + id, { headers: this.headers });
  }

  createFeedback(feedback: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/Feedback', feedback, { headers: this.headers });
  }

  updateFeedback(feedback: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/Feedback/' + feedback.id, feedback, { headers: this.headers });
  }
}
