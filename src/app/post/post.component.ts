import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { AppError } from '../app.error';
import { NotFoundError } from '../notfound.error';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  posts: any[];

  constructor(private service: PostService) {
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    this.service.save(post).subscribe(
      response => {
        post['id'] = response['id'];
        this.posts.splice(0, 0, post);
        console.log(this.posts);
    }, 
      error => {
        if(error instanceof AppError)
          alert('unexpected error');
    })
  }

  updatePost(post) {
    let originalTitle = post.title;
    post.title = 'tae';
    this.service.update(78950, post).subscribe(null,(
      error) => {
        post.title = originalTitle;
        throw error;
    });
  }

  deletePost(post) {
    this.service.delete(null).subscribe(
      () => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
    }, 
    (error : Response) => {
      if(error instanceof NotFoundError)
        alert('this post has already been deleted');
    })
  }

  ngOnInit(): void {
    this.service.getAll().subscribe(
      response => {
        this.posts = response as any;
    },
    (error : AppError )=>{
      if(error instanceof NotFoundError)
        alert('Not found error');
      else
        alert('Server unexpected error' + error.originalError);
    })
  }

}
