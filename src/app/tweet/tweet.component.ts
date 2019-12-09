import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Tweet} from '../tweet';
import { ActivatedRoute} from '@angular/router';
import { TwitterService} from '../twitter.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit, OnDestroy {
  private id: number;
  tweets: Tweet[];
  private sub: any;
  constructor(private twitterService: TwitterService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => { this.id = +params.id; });
    console.log('voici: : ' + this.id);
    this.getTweets();
  }
  getTweets(): void {
    this.twitterService.home().subscribe(tweets => {
      tweets.data.reverse().forEach(tweet => {
        this.tweets.unshift(tweet);
      });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
