import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  isLoading:boolean = false;
  msg:string=""
  id:any=null
constructor(private _CartService:CartService,private _ActivatedRoute:ActivatedRoute){
  let {id} =_ActivatedRoute.snapshot.params
  this.id=id;
}

  paymentForm:FormGroup = new FormGroup({
    details: new FormControl('',[Validators.required]),

    phone: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    })

    handlePayment(){
      this.isLoading=true;
  console.log(this.paymentForm.value);


      if(this.paymentForm.invalid != true){
       this._CartService.createOrder(this.id,this.paymentForm.value).subscribe({
        next: (res)=>{
          console.log(res);
          if(res.status == 'success'){
            this.isLoading=false;
            window.location.href=res.session.url
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
