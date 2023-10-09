import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  isLoading:boolean = false;
  msg:string=""
constructor(public _AuthService:AuthService ,public _Router:Router) {

}

registerForm:FormGroup = new FormGroup({
name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
email: new FormControl('',[Validators.required,Validators.email]),
password: new FormControl('',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
rePassword: new FormControl('',[Validators.required]),
phone: new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
},{validators: this.rePasswordMatch})

rePasswordMatch(form:any){
  let password= form.get('password');
  let rePassword= form.get('rePassword');
  if( password?.value==rePassword?.value ){
    return null;
  }else{
    rePassword?.setErrors({repassword:"rePassword does not match"})
    return {repassword:"rePassword does not match"};
  }
}
handleRegister(){
  this.isLoading=true;
  if(this.registerForm.invalid != true){
   this._AuthService.signUp(this.registerForm.value).subscribe({
    next: (res)=>{
      if(res.message=="success"){
        this.isLoading=false;
this._Router.navigate(['/signin']);
      }

    },
    error: (err)=>{
      this.isLoading=false;
      console.log(err);
      if(err.error.message=="fail"){

        this.msg=err.error.errors.msg
      }
    }
   });
  }


}
}
