import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  isLoading:boolean = false;
  msg:string=""
  constructor(public _AuthService:AuthService ,public _Router:Router ,private _CartService:CartService,private _WishListService:WishListService) {

  }

  loginForm:FormGroup = new FormGroup({
  email: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required]),
  })
  handleLogin(){
    this.isLoading=true;
    if(this.loginForm.invalid != true){
     this._AuthService.signIn(this.loginForm.value).subscribe({
      next: (res)=>{
        console.log(res);
        if(res.message=="success"){
          localStorage.setItem('token',res.token);
  this._Router.navigate(['/home']);
  this.isLoading=false;
  this._AuthService.decodedUserToken();
  this._CartService.getUserCart().subscribe({
    next:(data)=>{
      this._CartService.changeCartCount(data.numOfCartItems)
    }
  })
  this._WishListService.getUserWishList().subscribe({
    next:(data)=>{
      this._WishListService.changeWishCount(data.count)
    }
  })

        }
      },
      error: (err)=>{
        console.log(err);
    this.isLoading=false;
    if(err.error.statusMsg=="fail"){
      this.msg=err.error.message
    }
      }
     });
    }
  }
}
