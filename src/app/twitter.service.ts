import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

export interface TwitterResponse {
  data: any;
}
@Injectable({
  providedIn: 'root',
})
export class TwitterService {
  constructor(private http: HttpClient) { }

  home() {
    return this.http.get<TwitterResponse>(`${environment.api}/home`);
  }

  getTwitById(id: string) {
    return this.http.get<TwitterResponse>(`${environment.api}/detail/${id}`);
  }
}
