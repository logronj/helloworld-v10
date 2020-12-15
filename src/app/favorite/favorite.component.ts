import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {


  @Input() isFavorite : boolean;
  @Input() childItem: string;
  @Output() change  = new EventEmitter();
  title : string;
  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }

  constructor() { 

  }

  ngOnInit(): void {
  }

}

export interface FavoriteChangedEventArgs{
  newValue : boolean;
}
