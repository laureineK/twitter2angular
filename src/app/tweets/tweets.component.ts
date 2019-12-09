import {Component, OnInit} from '@angular/core';
import {Tweet} from '../tweet';
import {TwitterService} from '../twitter.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {
  tweets: Tweet[] = [];
  selectedTweet: Tweet;

  constructor(private twitter: TwitterService) {
  }
  ngOnInit() {
    this.getTweets();
  }
  getTweets(): void {
    this.twitter.home().subscribe(tweets => {
      tweets.data.reverse().forEach(tweet => {
          this.tweets.unshift(tweet);
      });
    });
  }
}
