import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
   productList:any="";
  constructor(private product:ProductService,private router:Router) {
    this.product.viewProduct().subscribe(result=>{
      this.productList=result;
    })
   }

   deleteProductHtml(PId:any,SNo:any){
     let t=confirm("Are your sure");
     if(t)
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
   
   editProductHtml(pid:any){
    this.router.navigate(['edit-product',pid]);
   }
  ngOnInit(): void {
  }

}
