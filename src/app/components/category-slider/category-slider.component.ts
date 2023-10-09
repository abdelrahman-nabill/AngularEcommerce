import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css']
})
export class CategorySliderComponent implements OnInit {
  slider:any=[]
  constructor(private _CategoryService:CategoryService){

  }
  customOptions: OwlOptions = {
    loop: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 6
      },
      740: {
        items: 8
      },
      940: {
        items: 8
      }
    },

  }
  ngOnInit(): void {
    this._CategoryService.getCategories().subscribe({
      next:({data})=>{
        this.slider=data;
        console.log(data);

      }
    })
  }
}
