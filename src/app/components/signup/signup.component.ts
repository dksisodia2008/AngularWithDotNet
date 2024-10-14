import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import ValidateForm from '../../helpers/validateform';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
  constructor(private fb : FormBuilder, private auth : AuthService, private router : Router){}
  
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

      this.auth.signUp(this.signUpForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message)
          this.signUpForm.reset();
          this.router.navigate(['login']);
        },
        error:(err) =>{
          alert(err.error.message)
        }
      })
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
  
  