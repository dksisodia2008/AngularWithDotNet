import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validateform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
type: string ="password";
isText:boolean = false;
eyeIcon: string = "fa-eye-slash";
loginForm!:FormGroup;
constructor(private fb: FormBuilder)
{


}
ngOnInit() : void{
  this.loginForm = this.fb.group(
    {
      username : ['', Validators.required],
      password : ['', Validators.required]
    }
  )
}

hideShowPass()
{
  this.isText =!this.isText;
  this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
  this.isText ? this.type = "text" : this.type = "password";
}
onSubmit()
{
  if(this.loginForm.valid)
  {
   console.log("Form is valid");
  }
  else
  {
    ValidateForm.validateAllFormFiels(this.loginForm);
    console.log("your form is not valid");
  }
}
}
