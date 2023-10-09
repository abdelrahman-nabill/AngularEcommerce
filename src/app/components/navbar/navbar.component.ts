import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from 'src/app/services/wish-list.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  count:number = 0;
  wishCount:number = 0;
isLoggedIn:boolean = false;
  constructor(public _authService:AuthService,private _cart:CartService,private _WishListService:WishListService){
    this._authService.decoded.subscribe({


      next:(data:any)=>{
        localStorage.setItem('cartOwner',data.id)
        if(_authService.decoded.getValue() != null){
          console.log(data);
          this.isLoggedIn=true;
        }else{
          console.log(data);
          this.isLoggedIn=false;

        }

      }

    });
    this._cart.cartCount.subscribe({
      // this._authService.decoded.subscribe({

      // })
      next:(data)=>{
        console.log(data);
        this.count = data;
      }
    })
    this._WishListService.wishCount.subscribe({
      // this._authService.decoded.subscribe({

      // })
      next:(data)=>
      {
      console.log(data);
      this.wishCount = data;
      }
    })


  }



logOut(){

  localStorage.removeItem('token');
  localStorage.removeItem('cartOwner');

  this._authService.decoded.next(null);

  this._authService.decoded.subscribe({

    next:(data)=>{
      if(data){
        console.log(data);
        this.isLoggedIn=true;
      }else{
        console.log(data);
        this.isLoggedIn=false;

      }
    }
  });

  // this._authService.logOut();
}
}
