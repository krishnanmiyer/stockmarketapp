import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StockmarketService } from '../../shared/stockmarket.service';
import { Userlogin } from '../../shared/stockmarket.model';
import { LoginService } from '../../shared/login.service';

@Component({
  selector: 'user-login',
  templateUrl: 'app/user/login/login.component.html'
})

export class LoginComponent implements OnInit{
  login: FormGroup;
  submittedValues: string;
  invalidEmail: boolean = false;
  returnPath: string;

  constructor(fb: FormBuilder, private route: ActivatedRoute, private router: Router, private service: StockmarketService, private loginService:LoginService) {
    this.login = fb.group({
      'email': ['', Validators.compose([Validators.required, CustomValidators.emailValidator])],
      'password': ['', Validators.compose([Validators.required, CustomValidators.passwordValidator])]});
  }

  ngOnInit() {
    this.route.params.subscribe(params => { this.logout(params['status'] || '') });
  }

  logout(data: any) {
    if (data == 'out') {
      this.loginService.changeLoginStatus(false);
      this.router.navigate(['/']);
    }
    else if (data != 'in' && data != '') {
      this.returnPath = data;
    }
  }

  onBlur(event: any): void {
    if (event.target.value != '') {
      this.login.patchValue({ name: event.target.value.trim() });
      event.target.value = event.target.value.trim();
    }
  }

  onSubmit(data: any): void {
    var user = new Userlogin();
    user.username = data.email;
    user.password = data.password;

    this.service.login(user).subscribe(r => this.setUser(r, user.username));
  }

  setUser(data: any, email: string) {
    if (data == null || data == undefined || data == "")
    {
      this.invalidEmail = true;
    }
    else {
      this.invalidEmail = false;
      this.loginService.changeLoginStatus(true, email);
      console.log(this.returnPath);
      
      if (this.returnPath != '') {
        this.router.navigate([ `/${this.returnPath}`]);
      }
      else {
        this.router.navigate(['/home']);
      }
    }
  }
}

export class CustomValidators {
  static emailValidator(control: FormControl): { [s: string]: boolean } {
    var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return control.dirty && control.value != "" && !control.value.match(emailRegex) ? { "invalid": true } : null;
  }

  static passwordValidator(control: FormControl): { [s: string]: boolean } {
    return control.dirty && control.value != "" && control.value.trim().length < 1 ? { "invalid": true } : null;
  }
}

