import { HttpClient } from '@angular/common/http';
import { Component , Input} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent {
userId:any = null
orders:any=null
  // @Input() userData:any="";
  constructor(private _CartService:CartService){
if(localStorage.getItem('cartOwner')!=null){
  this.userId=localStorage.getItem('cartOwner')
  }

  this.getUserOrder()

}
getUserOrder(){
this._CartService.getUserOrder(this.userId).subscribe({
  next: (data)=>{
    console.log(data);
    this.orders=data

  }
})
}
}
