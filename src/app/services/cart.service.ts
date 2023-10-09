import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartCount:BehaviorSubject<any>=new BehaviorSubject(0)
  headers:any= null
  constructor(private _httpClient:HttpClient,private _authService:AuthService) {
    this.check()
    this.getUserCart().subscribe({
      next:(data)=>{
        this.changeCartCount(data.numOfCartItems)
      }
    })
  }
check(){
  this._authService.decoded.subscribe((data)=>{
    if(this._authService.decoded.getValue()!=null){
      this.headers={token:localStorage.getItem('token')}

    }

  })
}



  changeCartCount(data:number){
  this.cartCount.next(data)
  }
  addToCart(data:any):Observable<any>{
return this._httpClient.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:data},{
  headers:this.headers
})
  }
  getUserCart():Observable<any>{
    return this._httpClient.get("https://ecommerce.routemisr.com/api/v1/cart",{
      headers:this.headers
    })
      }

  updateQuantity(id:string,count:any):Observable<any>{
    return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count:count},{
          headers:this.headers
        })
          }
  deleteItem(id:string):Observable<any>{
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
        headers:this.headers
        })
         }
  createOrder(id:string,data:object):Observable<any>{
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`, {shippingAddress:data},
    {headers:this.headers})
  }
  getUserOrder(id:string):Observable<any>{
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
         }

}
