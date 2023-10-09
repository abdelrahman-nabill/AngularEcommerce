import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class WishListService {
  wishCount:BehaviorSubject<any>=new BehaviorSubject(0)
  headers:any=null;

  constructor(private _httpClient:HttpClient,private _authService:AuthService) {
    this.check()
    this.getUserWishList().subscribe({
      next:(data)=>{
        this.changeWishCount(data.count)
      }
    })


  }

  check(){
    this._authService.decoded.subscribe((data)=>{
      if(data!=null){
        this.headers={token:localStorage.getItem('token')}

      }

    })
  }

  changeWishCount(data:number){
    this.wishCount.next(data)
    }

  addToWhishList(data:any):Observable<any>{
return this._httpClient.post("https://ecommerce.routemisr.com/api/v1/wishlist",{productId:data},{
  headers:this.headers
})
  }
  getUserWishList():Observable<any>{
    return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/wishlist",{
      headers:this.headers
    })
      }


  deleteItem(id:string):Observable<any>{
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
              headers:this.headers
            })
              }

}
