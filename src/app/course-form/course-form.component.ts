import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  categoryList = [{id: 1, description: 'development'},{id: 2, description: 'arts'},{id: 3, description: 'languages'}];
  constructor() { }

  ngOnInit(): void {
  }

  submit(f){
    console.log(f);
  }

  courseNameChanged(courseName){
      console.log(courseName);
  }

}
