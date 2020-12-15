import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() isLiked: boolean;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickLike(){
    this.isLiked = !this.isLiked;
    this.change.emit({newValue: this.isLiked});
    console.log('on click like');
  }

}

export class LikeChangedEventArgs{
  newValue : boolean;
}
