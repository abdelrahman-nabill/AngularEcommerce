import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  userData:any=null
  cartId:any=null
  empty:boolean=false
  constructor(private _CartService:CartService,) {

    this.getLoggedUserCart();
   }
getLoggedUserCart(){
  this._CartService.getUserCart().subscribe({
    next:({data})=>{
      if(data.products.length==0){
        this.empty=true

      }
      console.log(data);
      this.cartId=data.cartOwner
      this.userData=data;

    },
    error:(err)=>{
      this.userData=err
      this.empty=true
    }
  })
}
updateQuantity(id:string,count:any){
  this._CartService.updateQuantity(id,count).subscribe({
    next:({data})=>{
      console.log(data);

      this.userData=data;
    },
  })
}

deleteItem(id:string){
  this._CartService.deleteItem(id).subscribe({
    next:({data})=>{
      console.log(data);
      this._CartService.changeCartCount(data.products.length)

      this.userData=data;
    },
    error:(err)=>{
      console.log(err);
    }
  })
}

cartOwner(){
  localStorage.setItem('cartOwner',this.cartId)
}
// createOrder(id:string){
//   this._CartService.createOrder(id).subscribe({
//     next:(data)=>{
//       console.log(id);
//       console.log(data);
//       window.location.href=data.session.url

//     },
//     error:(err)=>{
//       console.log(err);
//       console.log(id);
//       console.log(localStorage.getItem("token"));


//     }
//   })
// }
}
