import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  isLoading:boolean = false;
  code:boolean = false;
  msg:string=""
  msgCode:string=""
  showSuccess(msg:string) {
    this.toastr.success(msg);
  }

constructor(private _AuthService:AuthService,private toastr: ToastrService,private _Router:Router){}

  forgetForm:FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
  })

  verifyForm:FormGroup = new FormGroup({
    resetCode: new FormControl('',[Validators.required]),

  })

    handleForget(){
      this.isLoading=true;
      this._AuthService.forgetPassword(this.forgetForm.value).subscribe({
        next:(data)=>{
          console.log(data);
  this.isLoading=false;
this.code=true;
        this.showSuccess(data.message)


        },
        error:(err)=>{
  this.isLoading=false;
this.code=false;
          this.msg=err.error.message
          console.log(this.msg);

          console.log(err);
        }
      })
      console.log(this.forgetForm.value);


    }

    handleVerify(){
      this.isLoading=true;

      this._AuthService.resetCode(this.verifyForm.value).subscribe({
        next:(data)=>{
          console.log(data);
      this.isLoading=false;

          if(data.status == "Success"){
            this._Router.navigate(['/resetPassword'])
          }

        },
        error:(err)=>{
          console.log(err);
      this.isLoading=false;

          this.msgCode=err.error.message
        }
      })
      console.log(this.verifyForm.value);
    }
}
