import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
productId:any;
productQty:number=0;
address:any="";
mobile:any="";
productName:string="";
productPrice:number=0;
cartList:any;
// productDescription:any="";
productDiscount:number=0;
  constructor(private order:OrderService,private cart:CartService) { 
    this.cart.viewCartf(localStorage.getItem('userId')).subscribe(result=>{
      this.cartList=result.productId;
      // this.productName=this.cartList[0].productName
      console.log(result);
      //  this.productName=this.cartList.productName;
    })
  }

  ngOnInit(): void {
  }
  placeOrder(){

  }
}
