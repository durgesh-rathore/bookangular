import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  viewCart="https://angularapi-api.herokuapp.com/api/cart/viewcart";

  constructor(private _http:HttpClient) {

   }
   viewCartf(userId:any):Observable<any>{
     return this._http.post(this.viewCart,{userId:userId})
   }
}
