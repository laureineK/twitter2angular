import {Pipe, PipeTransform} from '@angular/core';
import {Tweet} from './tweet';

@Pipe({
  name: 'selectedTweetPipe'
})
export class TweetPipe implements PipeTransform {

  constructor() {}
  transform(allTweets: Tweet[], tweetId: number): any {
    return allTweets.filter(tweet => tweet.id === tweetId);
  }

}
