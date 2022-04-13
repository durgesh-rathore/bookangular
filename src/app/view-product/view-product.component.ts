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

   deleteProductHtml(PId:any,SNo:any){
     confirm("Are your sure");
     this.product.deleteProduct(PId).subscribe(result=>{
       if(result){
        this.productList.splice(SNo,1);
        // alert("Delete succesfully")
       }
        else
        alert("faild to delete");
      //  this.productList=result;
     })
   }

  ngOnInit(): void {
  }

}
