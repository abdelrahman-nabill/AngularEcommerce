import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {
  subDetails:any=[]
constructor(private _CategoryService:CategoryService,private _ActivatedRoute:ActivatedRoute) {
  let {id} =_ActivatedRoute.snapshot.params

_CategoryService.getSubCategory(id).subscribe(({data})=>{
  this.subDetails=data;
})
}
}
