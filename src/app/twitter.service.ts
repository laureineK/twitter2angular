import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Tweet} from './tweet';

export interface TwitterResponse {
  data: any;
}
@Injectable({
  providedIn: 'root',
})
export class TwitterService {
  selectedTweet: Tweet;
  constructor(private http: HttpClient) { }
  user() {
    return this.http.get<TwitterResponse>(`${environment.api}/user`);
  }
  home() {
    return this.http.get<TwitterResponse>(`${environment.api}/home`);
  }

  getTwitById(id: number) {
    return this.http.get<TwitterResponse>(`${environment.api}/test/${id}`);
  }

  setSelectedTweet(selected: Tweet, id: number) {
    this.selectedTweet = selected;
    this.getTwitById(id);
  }

  getSelectedTweet() {
    return this.selectedTweet;
  }

}
