import {Component, NgModule} from '@angular/core'
import { CoursesService } from './course/course.service';

@Component({
    selector : 'courses',
    template : `<h2>{{title + courses.length}}</h2>
                <h2 [textContent] = "title"></h2>
               <ul>
                    <li *ngFor="let course of courses">{{course}}</li>
               </ul> 
               <img src="{{imageUrl}}"/>
               <button class="btn btn-primary">btn1</button>
               <input [(ngModel)] = "email" (keyup.enter)="onKeyUp()" />
               <p>{{text | summary:10}}</p>
               <span class="{{star}}" aria-hidden="true" (click) = "onClickStar()">Hello </span>
               `
})
export class CoursesComponent{

    private _title:string = 'List Of Courses';
    imageUrl =  "http://lorempixel.com/400/200";

    courses: string[];
    email;
    star = "glyphicon glyphicon-star-empty";
    text = "lorem ipsum dolor omet lorem ipsum dolor omet lorem ipsum dolor omet lorem ipsum dolor omet lorem ipsum dolor omet"+
    "lorem ipsum dolor omet lorem ipsum dolor omet lorem ipsum dolor omet lorem ipsum dolor omet lorem ipsum dolor omet"
   
    constructor(service:CoursesService){
        this.courses = service.getCourses();
    }

    get title(){
        return this._title;
    }

    onKeyUp(){console.log(this.email)}
    onClickStar(){
        console.log('test');
        this.star = this.star.includes("empty") ? "glyphicon glyphicon-star" : "glyphicon glyphicon-star-empty";
    }
}