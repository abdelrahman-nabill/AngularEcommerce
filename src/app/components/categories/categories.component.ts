import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories:any=null
constructor(private _CategoryService:CategoryService) {
_CategoryService.getCategories().subscribe(({data})=>{
  this.categories=data;

})
}
}
