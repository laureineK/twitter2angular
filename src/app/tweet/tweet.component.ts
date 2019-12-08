import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Tweet} from '../tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {
  @Input() tweet: Tweet;
  @Input() retweet: Tweet;
  @Output() action = new EventEmitter<{property: string, tweet: Tweet}>();
  constructor() { }
  toggleAction(property: 'update'|'retweet') {
    this.action.emit({property, tweet: this.tweet});
  }
}
