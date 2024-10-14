import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { sign } from 'crypto';
import { SignupComponent } from './components/signup/signup.component';
import { UserListComponent } from './Users/user-list.component';
import { DeshboardComponent } from './components/deshboard/deshboard.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"user-list", component:UserListComponent},
  {path:"deshboard", component:DeshboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
