import {Component, OnInit} from '@angular/core';
import {Tweet} from '../tweet';
import {TwitterService} from '../twitter.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  tweet: Tweet;
  mailText = '';

  constructor(private twitterService: TwitterService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.twitterService.getTwitById(params.get('id')).subscribe(tweet => {
        this.tweet = tweet.data;
        this.mailText = 'Le ' + this.tweet.created_at + ' ,' + this.tweet.user.name + ' a tweeté : << ' + this.tweet.text + ' >>';
      });
    });
  }

  mailMe() {
    const tweetMail = 'mailto:laureinestella@gmail.com?subject=Tweet Details&body=' + this.mailText;
    window.location.href = tweetMail;
  }
}
