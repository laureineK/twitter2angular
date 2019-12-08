import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

export interface TwitterResponse {
  data: any;
  resp: any;
}
@Injectable()
export class TwitterService {

  constructor(private http: HttpClient) { }
  user() {
    return this.http.get<TwitterResponse>(`${environment.api}/user`);
  }
  home() {
    return this.http.get<TwitterResponse>(`${environment.api}/home`);
  }
  action(property: 'update'|'retweet', id: string, state: boolean) {
    return this.http.post<TwitterResponse>(`${environment.api}/${property}/${id}`, {state});
  }
}
