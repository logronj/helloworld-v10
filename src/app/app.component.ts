import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { LikeChangedEventArgs } from './like/like.component';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloworld';
  post = {
    title: "favorite",
    isFavorite: true
  }

  tweet = {
    body : "Tweet body....",
    isLiked : false,
    likeCount : 0
  }

  tweet2 = {
    body : "Tweet body....",
    isLiked : true,
    likeCount : 10
  }

  onFavoriteChanged(eventArgs : FavoriteChangedEventArgs){
    console.log('args: ',eventArgs);
  }

  onLikeChanged(eventArgs :LikeChangedEventArgs){
    console.log('onLikeChanged: ',eventArgs);
    this.tweet.isLiked = eventArgs.newValue;
    this.tweet.isLiked ? this.tweet.likeCount++ : this.tweet.likeCount--;
  }

}
