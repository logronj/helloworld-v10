import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators{
    static invalidOldPassword(control : AbstractControl) : Promise<ValidationErrors>{
        return new Promise((resolve) =>{
            setTimeout(()=>{
                if(control.value!=='1234')
                    resolve({invalidOldPassword : true});
                else
                    resolve(null);
            },2000)
        });
    }

    static passwordShouldMatch(control : AbstractControl){
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if(newPassword.value!== confirmPassword.value) return {passwordShouldMatch : true}
    }

}