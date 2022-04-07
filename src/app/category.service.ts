import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Form } from '@angular/forms';

@Injectable()
export class CategoryService {
   addImage="https://angularapi-api.herokuapp.com/api/category/add";
   viewCategory="https://angularapi-api.herokuapp.com/api/category/category-list";
   deletecategory="https://angularapi-api.herokuapp.com/api/category/delete-category";
  constructor(private _http:HttpClient) { }
  addCategory(imagedata:any):Observable<any>{
    return this._http.post(this.addImage,imagedata)
  }
  viewCategoryf():Observable<any>{
    return this._http.get(this.viewCategory);
  }
  deleteCategory(CID:any):Observable<any>{
    return this._http.post(this.deletecategory,{id:CID});
  }
}
