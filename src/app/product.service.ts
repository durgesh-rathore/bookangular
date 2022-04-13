import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  addProductUrl="https://angularapi-api.herokuapp.com/api/product/add";
  viewProductUrl="https://angularapi-api.herokuapp.com/api/product/product-list";
  deleteProductUrl="https://angularapi-api.herokuapp.com/api/product/delete-product";
  constructor( private http:HttpClient ) {
     }
     addProduct(formdata:FormData):Observable<any>{
      return this.http.post(this.addProductUrl,formdata);
     }
     viewProduct():Observable<any> {
       return this.http.get(this.viewProductUrl);
     }
     deleteProduct(Pid:any):Observable<any>{
       return this.http.post(this.deleteProductUrl,{Id:Pid})
       
     }
}
