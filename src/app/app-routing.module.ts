import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './src/views/form/form.component'
import { LoginComponent } from './src/views/login/login.component'
import { MidiaComponent } from './src/views/midia/midia.component'
import { FilesComponent } from './src/views/files/files.component'


const routes: Routes = [{
  path: 'form', component: FormComponent
},
{
  path: '', component: LoginComponent
}, {
  path: 'midia', component: MidiaComponent
},{
  path: 'files', component: FilesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
