import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-author',
  template: `<h2>{{authors.length}}</h2>
            <ul>
              <li *ngFor="let author of authors">{{author}}</li>
            </ul>
            `,
  // templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  public authors;

  constructor(author : AuthorService) { this.authors = author.getAuthor() }

  ngOnInit(): void {
  }

}
