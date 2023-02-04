import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormComponent } from './src/views/form/form.component'
import { LoginComponent } from './src/views/login/login.component'
import { FilesComponent } from './src/views/files/files.component'
import { MidiaComponent } from './src/views/midia/midia.component'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginComponent,
    FilesComponent,
    MidiaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
