import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';   
import { AppComponent } from './app.component';
import { UserListComponent } from './Users/user-list.component';
import { StarComponent } from './shared/star.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DeshboardComponent } from './components/deshboard/deshboard.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    StarComponent,
    LoginComponent,
    SignupComponent,
    DeshboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
