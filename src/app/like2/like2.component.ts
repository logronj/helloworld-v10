import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like2',
  templateUrl: './like2.component.html',
  styleUrls: ['./like2.component.css']
})
export class Like2Component{

  @Input() likeCount:number;
  @Input() isActive:boolean;

  viewMode = 'liasdsadst';

  onClick(){
    this.isActive = !this.isActive;
    this.likeCount += this.isActive ? 1 : -1;
  }
}
