import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from '../_models/postInterface.model';

const APP_API_URL = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(`${APP_API_URL}/posts`);
  }
}
