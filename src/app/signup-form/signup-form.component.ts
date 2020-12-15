import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

/** Example of Reactive Forms (create FormControl objects explicitly in the .ts code) */
export class SignupFormComponent {

  form = new FormGroup({
    username : new FormControl('',[
      Validators.required , 
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace],
      UsernameValidators.shouldBeUnique
    ),
    password : new FormControl('',Validators.required)
  });

  get username(){
    return this.form.get('username');
  }

  log(username){
    console.log(username);
  }

  login(){
    this.form.setErrors({
      invalidLogin : true
    })
  }
}
