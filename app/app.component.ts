import { Component } from '@angular/core';
import { LoginService } from './shared/login.service';

@Component({
  selector: 'stock-quote',
  templateUrl: 'app/app.component.html',
})

export class AppComponent {
  showRegister: boolean = true;
  user: string;
  

  constructor(private loginService:LoginService) { 
  }
}