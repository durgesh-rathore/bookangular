import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
   productList:any="";
  constructor(private product:ProductService) {
    this.product.viewProduct().subscribe(result=>{
      this.productList=result;
    })
   }

  ngOnInit(): void {
  }

}
