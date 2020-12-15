import { Component, OnInit } from '@angular/core';
import { PostService } from '../post/post.service';
import { FollowerService } from './followers.service';
import { NotFoundError } from '../notfound.error';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers:any[];

  constructor(private service : FollowerService) { 
    
  }

  ngOnInit(): void {
      this.service.getAll().subscribe(
        response=>{
          this.followers = response as any;
      },
      error =>{
        if(error instanceof NotFoundError)
          alert("404 not found");
        else
          alert("Server unexpected error");
      })
  }

}
