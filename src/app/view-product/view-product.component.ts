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
   EditProduct(pid:any){
    console.log(pid);
   this.router.navigate(['edit-product',pid])
 }
 deleteProduct(ID:any,SNo:number){
  this.product.deleteProduct(ID).subscribe(result=>{
if(result){
    console.log("This serial number"+SNo);
    this.productList.splice(SNo,1);
    alert('Delete item sucessfully');
}
    else
    alert('failed to Delete item');
  })
}

addToCartHtml(pId:any){
     this.product.addToCart(pId,localStorage.getItem('admin-id')).subscribe(result=>{
       if(result){
         alert("added to cart");
       }
       else 
       alert("something went wrong...")
     })
}


  ngOnInit(): void {
  }

}
