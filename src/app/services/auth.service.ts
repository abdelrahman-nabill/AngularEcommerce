import { Observable,BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  decoded=new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    if(localStorage.getItem("token") != null){
    this.decodedUserToken();
  }
  }

  signUp(userData:any):Observable<any>{
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",userData);
  }

  signIn(userData:any):Observable<any>{
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",userData);
  }

  decodedUserToken(){

      let token:any = localStorage.getItem("token");
      let decodedToken:any=jwt_decode(token)
      this.decoded.next(decodedToken)

  }

  forgetPassword(userData:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,userData);
  }
  resetCode(userData:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,userData);
  }

  resetPassword(userData:any):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,userData);
  }

  // logOut(){
  //   localStorage.removeItem('token');
  // localStorage.removeItem('cartOwner');
  // this.decoded.next(null);
  // this._Router.navigate(['/signin'])

  // }

}
