import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishListService } from 'src/app/services/wish-list.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any=null
  isLoading:boolean = false
  searchValue:string=""
  showSuccess(msg:string) {
    this.toastr.success(msg);
  }
  showError(msg:string) {  this.toastr.error(msg);
  }
constructor(private _ProductService:ProductService,private _CartService:CartService,private toastr: ToastrService,private _WishListService:WishListService) {
  _ProductService.getProducts(1).subscribe(({data})=>{
    console.log(data);

this.products=data;
  })
}
addToCart(productId:string){
  this.isLoading=true;
  this._CartService.addToCart(productId).subscribe({
    next:(data)=>{
      if(data.status=="success"){
        this._CartService.changeCartCount(data.numOfCartItems)

        this.showSuccess(data.message)
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
addToWishList(productId:string){
  this._WishListService.addToWhishList(productId).subscribe({
    next:(data)=>{
      if(data.status=="success"){
        this._WishListService.changeWishCount(data.data.length)

        this.showSuccess(data.message)
      }
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
