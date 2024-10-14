import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import ValidateForm from '../../helpers/validateform';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  type: string ="password";
  isText:boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signUpForm!: FormGroup;
  constructor(private fb : FormBuilder){}
  
  ngOnInit(): void
  {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
    })

  }

  hideShowPass()
  {
    this.isText =!this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
  onSignUp()
  {
    if(this.signUpForm.valid)
    {

      console.log("Signup form is valid" + this.signUpForm.value);
    } else
    {
      ValidateForm.validateAllFormFiels(this.signUpForm);
      console.log("your form is not valid");
    }
  }
  //moved the below code in helper class
//   private validateAllFormFiels(formGroup: FormGroup)
// {
//   Object.keys(formGroup.controls).forEach(
//     field => {
//       const control = formGroup.get(field);
//       if(control instanceof FormControl)
//       {
//         control.markAsDirty({onlySelf:true});
//       }else if(control instanceof FormGroup)
//       {
//         this.validateAllFormFiels(control);
//       }
//     })
// }

  }
  
  