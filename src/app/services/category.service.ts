import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _HttpClient:HttpClient) { }
  getCategories():Observable<any>{
    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories");
  }
  getSubCategory(id:string,):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`);

  }
}
