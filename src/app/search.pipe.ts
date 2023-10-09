import { Product } from './product';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productList: Product[], searchVal:string): Product[] {
    return productList.filter((el)=>el.title.toLowerCase().includes(searchVal.toLowerCase()));
  }

}
