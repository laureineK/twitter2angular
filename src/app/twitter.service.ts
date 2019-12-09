import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

export interface TwitterResponse {
  data: any;
  resp: any;
}
@Injectable({
  providedIn: 'root',
})
export class TwitterService {

  constructor(private http: HttpClient) { }
  user() {
    return this.http.get<TwitterResponse>(`${environment.api}/user`);
  }
  home() {
    return this.http.get<TwitterResponse>(`${environment.api}/home`);
  }
}
