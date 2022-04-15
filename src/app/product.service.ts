import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of, shareReplay} from 'rxjs';

@Injectable()
export class ProductService {
  addProductUrl="https://angularapi-api.herokuapp.com/api/product/add";
  viewProductUrl="https://angularapi-api.herokuapp.com/api/product/product-list";
  deleteProductUrl="https://angularapi-api.herokuapp.com/api/product/delete-product";
  constructor( private http:HttpClient ) {
     }
     public responseCeche=new Map();
     addProduct(formdata:FormData):Observable<any>{
      return this.http.post(this.addProductUrl,formdata);
     }
     viewProduct():Observable<any> {
      const productsFromCache=this.responseCeche.get(this.viewProductUrl);
      if(productsFromCache){
        return of(productsFromCache)
      }
      const response=this.http.get<any>(this.viewProductUrl).pipe(shareReplay(1));
      response.subscribe(products=>this.responseCeche.set(this.viewProductUrl,products));
      return response;
      //  return this.http.get(this.viewProductUrl);
     }
     deleteProduct(Pid:any):Observable<any>{
       
       return this.http.post(this.deleteProductUrl,{id:Pid})
       
     }
}
