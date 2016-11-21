import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegistrationComponent }   from './registration.component';
import { ReactiveFormsModule  }   from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ RegistrationComponent ],
  bootstrap:    [ RegistrationComponent ]
})
export class RegistrationModule { }