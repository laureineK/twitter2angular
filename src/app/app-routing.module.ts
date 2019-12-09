import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TweetsComponent} from './tweets/tweets.component';
import {TweetComponent} from './tweet/tweet.component';


const routes: Routes = [
  { path: '', redirectTo: 'tweets', pathMatch: 'full' },
  { path: 'tweets', component: TweetsComponent },
  { path: 'tweet/:id', component: TweetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
