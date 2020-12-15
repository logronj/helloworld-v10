import { Component, Input, OnInit } from '@angular/core';

import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { expandCollapse } from './zippy.component.animation';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations:[
   expandCollapse
  ]
})
export class ZippyComponent implements OnInit {

  @Input('title') testes:string;

  isExpanded:boolean;

  toggle(){
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit(): void {
  }



}
