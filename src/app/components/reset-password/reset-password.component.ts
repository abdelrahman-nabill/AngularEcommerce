import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  isLoading:boolean = false;
  msg:string=""

constructor(private _AuthService:AuthService,private _Router:Router) {

}

  resetForm:FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    newPassword: new FormControl('',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
    })

  handleReset(){
    this.isLoading=true;
    console.log(this.resetForm.value);
    this._AuthService.resetPassword(this.resetForm.value).subscribe({
      next: (data)=>{
        console.log(data);
    this.isLoading=false;

this._Router.navigate(['/signin'])

      },
      error: (err)=>{
        console.log(err);
    this.isLoading=false;
    this.msg=err.error.message


      }
    })

  }
}
