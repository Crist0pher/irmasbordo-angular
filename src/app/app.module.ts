import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './src/views/form/form.component';
import { LoginComponent } from './src/views/login/login.component';
import { Form2Component } from './src/views/form2/form2.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginComponent,
    Form2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
