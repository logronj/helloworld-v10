import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidators } from './password.validator';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form : FormGroup;

  constructor(fb : FormBuilder) {

    this.form = fb.group({
      oldPassword : ['',Validators.required,PasswordValidators.invalidOldPassword],
      newPassword : ['',Validators.required],
      confirmPassword : ['',Validators.required]
    },{
      validators : PasswordValidators.passwordShouldMatch
    })

   }

  get oldPassword(){
    return this.form.get('oldPassword');
  }

  oldPasswordOnChange(oldPassword){
    
    console.log(oldPassword);
  }

  get newPassword(){
    return this.form.get('newPassword');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }
}
