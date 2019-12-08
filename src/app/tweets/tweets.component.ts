import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Tweet} from '../tweet';
import {TwitterService} from '../twitter.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetsComponent implements OnInit {
  inflight = false;
  tweets: Tweet[] = [];
  ids = [];

  constructor(private twitter: TwitterService) {
  }

  ngOnInit() {
    this.getTweets();
  }
  getTweets() {
    this.twitter.home().subscribe(tweets => {
      tweets.data.reverse().forEach(tweet => {
        if (this.ids.indexOf(tweet.id_str) < 0) {
          this.ids.push(tweet.id_str);
          this.tweets.unshift(tweet);
        }
      });
      console.log('et ici tweets: ' + this.tweets);
    });
  }
  action(action, index) {
    if (this.inflight) {
      return;
    }
    const stateKey = action.property === 'update' ? 'posted' : 'retweeted';
    const newState = !action.tweet[stateKey];
    this.inflight = true;
    this.twitter.action(action.property, action.tweet.id_str, newState)
      .subscribe(tweet => {
        this.tweets[index][stateKey] = newState;
        this.tweets[index][action.property + '_count'] += newState ? 1 : -1;
        this.inflight = false;
      });
  }

}
