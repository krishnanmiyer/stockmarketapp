import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent }   from './login.component';
import { ReactiveFormsModule  }   from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ LoginComponent ],
  bootstrap:    [ LoginComponent ]
})
export class LoginModule { }