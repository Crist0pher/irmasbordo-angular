import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent} from './src/views/form/form.component'
import { LoginComponent} from './src/views/login/login.component'

const routes: Routes = [{
  path:'form',component:FormComponent
},
{path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
