import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
import { Router } from '@angular/router';
import { StockmarketService } from '../../shared/stockmarket.service';
import { UserRegistration } from '../../shared/stockmarket.model';
import { LoginService } from '../../shared/login.service';

@Component({
  selector: 'user-registration',
  templateUrl: 'app/user/registration/registration.component.html'
})

export class RegistrationComponent {
  registration: FormGroup;
  submittedValues: string;
  invalidEmail: boolean = false;
  cookieKey: string = "stockmarketuser";

  constructor(fb: FormBuilder, private router: Router, private service: StockmarketService, private loginService:LoginService) {
    this.registration = fb.group({
      'name': ['', Validators.compose([Validators.required, CustomValidators.stringValidator])],
      'email': ['', Validators.compose([Validators.required, CustomValidators.emailValidator])],
      'password': ['', Validators.compose([Validators.required, CustomValidators.passwordValidator])],
      'confirmpassword': ['', Validators.compose([Validators.required])],
      'gender': 'Male'
    }, { validator: CustomValidators.matchingPassword('password', 'confirmpassword') });
  }

  onBlur(event: any): void {
    if (event.target.value != '') {
      this.registration.patchValue({ name: event.target.value.trim() });
      event.target.value = event.target.value.trim();
    }
  }

  onSubmit(data: any): void {
    var user = new UserRegistration();
    user.userName = data.name;
    user.emailAddress = data.email;
    user.gender = data.gender == "Male" ? 0 : 1;
    user.password = data.password;

    this.service.addUser(user).subscribe(r => this.setUser(r, user.emailAddress));
  }

  setUser(data: any, username: string) {
    if (data == null || data == undefined || data == "")
    {
      this.invalidEmail = true;
    }
    else {
      this.invalidEmail = false;
      this.loginService.changeLoginStatus(true, username);
      this.router.navigate(['/']);
    }
  }
}

export class CustomValidators {
  static stringValidator(control: FormControl): { [s: string]: boolean } {

    return control.dirty && control.value != "" && control.value.trim() == "" ? { "invalid": true } : null;
  }

  static emailValidator(control: FormControl): { [s: string]: boolean } {
    var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return control.dirty && control.value != "" && !control.value.match(emailRegex) ? { "invalid": true } : null;
  }

  static passwordValidator(control: FormControl): { [s: string]: boolean } {
    return control.dirty && control.value != "" && control.value.trim().length < 8 ? { "invalid": true } : null;
  }

  static matchingPassword(password: string, confirmpassword: string) {
    return (group: FormGroup): { [key: string]: any } => {
      let pass = group.controls[password].value;
      let cpass = group.controls[confirmpassword].value;

      if (pass == '' && cpass == '') return null;

      if ( pass != cpass) {
        return {
          invalid: true
        };
      }
    }
  } 
}

