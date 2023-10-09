import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {
  userData:any=null
  isLoading:boolean = false
  empty:boolean=false
  showSuccess(msg:string) {
    this.toastr.success(msg);
  }
  showError(msg:string) {  this.toastr.error(msg);
  }

constructor(private _WishListService:WishListService,private _CartService:CartService,private toastr: ToastrService) {
this.getLoggedUserCart()
}


getLoggedUserCart(){
  this._WishListService.getUserWishList().subscribe({
    next:(data)=>{
      if(data.data.length == 0){
        this.empty=true
      }
      console.log(data);
      this.userData=data.data;
    },
    error:(err)=>{
      this.userData=err
      this.empty=true
    }
  })
}
deleteItem(id:string){
  this._WishListService.deleteItem(id).subscribe({
    next:({data})=>{
      console.log(data);
      this._WishListService.changeWishCount(data.length)
      this.userData=data;
      this.getLoggedUserCart()

    },
    error:(err)=>{
      console.log(err);
    }
  })
}
addToCart(productId:string){
  this.isLoading=true;
  this._CartService.addToCart(productId).subscribe({
    next:(data)=>{
      if(data.status=="success"){
        this._CartService.changeCartCount(data.numOfCartItems)

        this.showSuccess(data.message)
        console.log(data);


      }
      this.isLoading=false;
      console.log(data);

    },
    error:(err)=>{
      this.showError(err.error.message)
      this.isLoading=false;
      console.log(err);

    }
  }

  )
}
}
