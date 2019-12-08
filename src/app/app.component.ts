import {Component, OnInit} from '@angular/core';
import {TwitterService} from './twitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TwitterService]
})
export class AppComponent implements OnInit {
  title = 'twitter2angular';
  user;

  constructor(private twitter: TwitterService) {}
  ngOnInit(): void {
    this.twitter.user()
      .subscribe( use => this.user = use.data);
  }
}
