import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
  brands:any=null
constructor(private _ProductService:ProductService) {
  _ProductService.getBrands().subscribe(({data})=>{
this.brands=data;
  })
}
}
