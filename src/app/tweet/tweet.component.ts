import {Component, OnInit} from '@angular/core';
import {Tweet} from '../tweet';
import { TwitterService} from '../twitter.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  tweet: Tweet;
  tweetMail = '';
  mailText = '';
  constructor(private twitterService: TwitterService) {}
  ngOnInit(): void {
    this.getTweets();
  }
  getTweets(): void {
    this.tweet = this.twitterService.getSelectedTweet();
    this.mailText = 'Le ' + this.tweet.created_at + ' ,' + this.tweet.user.name + ' a Tweete : << ' + this.tweet.full_text + ' >>';
  }

  mailMe() {
    this.tweetMail = 'mailto:laureinestella@gmail.com?subject=Tweet Details&body=' + this.mailText;
    window.location.href = this.tweetMail;
  }
}
