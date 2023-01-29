import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './src/views/form/form.component'
import { LoginComponent } from './src/views/login/login.component'
import { MediaComponent } from './src/views/media/media.component'
import { FilesComponent } from './src/views/files/files.component'


const routes: Routes = [{
  path: 'form', component: FormComponent
},
{
  path: 'login', component: LoginComponent
}, {
  path: 'midia', component: MediaComponent
},{
  path: 'files', component: FilesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
