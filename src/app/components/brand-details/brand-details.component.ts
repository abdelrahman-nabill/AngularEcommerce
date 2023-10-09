import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.css']
})
export class BrandDetailsComponent {
  brand:any= {};
constructor(private _ActivatedRoute:ActivatedRoute,private _ProductService:ProductService) {
  let {id} =_ActivatedRoute.snapshot.params


  _ProductService.getBrandDetails(id).subscribe(({data})=>{
    console.log(data);

    this.brand=data;
  })
}
}
