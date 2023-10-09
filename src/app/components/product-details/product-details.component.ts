import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productDetail:any= null;
  isLoading:boolean = false
  showSuccess(msg:string) {
    this.toastr.success(msg);
  }
  showError(msg:string) {  this.toastr.error(msg);
  }
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },

  }
constructor(private _ActivatedRoute:ActivatedRoute,private _ProductService:ProductService,private _CartService:CartService,private toastr: ToastrService) {
  let {id} =_ActivatedRoute.snapshot.params
 _ProductService.getProductDetails(id).subscribe(({data})=>{
  console.log(data);

this.productDetail=data;
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
}
