import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Form } from '@angular/forms';

@Injectable()
export class CategoryService {
   addImage="https://angularapi-api.herokuapp.com/api/category/add";
   viewCategory="https://angularapi-api.herokuapp.com/api/category/category-list";
   deletecategory="https://angularapi-api.herokuapp.com/api/category/delete-category";
   public responseCeche=new Map();

  constructor(private _http:HttpClient) { }
  addCategory(imagedata:any):Observable<any>{
    return this._http.post(this.addImage,imagedata)
  }
  viewCategoryf():Observable<any>{
    const categorysFromCache=this.responseCeche.get(this.viewCategory);
    if(categorysFromCache){
      return of(categorysFromCache)
    }
    const response=this._http.get<any>(this.viewCategory);
    response.subscribe(categorys=>this.responseCeche.set(this.viewCategory,categorys));
    return response;
    // return this._http.get(this.viewCategory);
  }
  deleteCategory(CID:any):Observable<any>{
    return this._http.post(this.deletecategory,{id:CID});
  }
}
