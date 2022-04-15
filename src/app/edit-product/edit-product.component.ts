import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  pid:any="";
  productName:any="";
  productImageUrl:any=""
  products:any;
  productQty:any;
  categoryId: any;
  productDiscount: any;
  productDescription: any;
  categoryList:any;
  constructor(private router:ActivatedRoute,private ps:ProductService,private cs:CategoryService) {
    this.pid=this.router.snapshot.paramMap.get('pid')
      this.ps.viewProduct().subscribe(result=>{
        this.products=result;
        for(let product of this.products){
          if(product._id==this.pid){
            this.productName=product.productName;
            this.productImageUrl=product.productImageUrl;
            this.productQty=product.productQty;
            this.productDescription=product.productDescription;
            this.productDiscount=product.productDiscount;
            this.categoryId=product.cateogoryId;
          }
        }
      })
      this.cs.viewCategoryf().subscribe(result=>{
        if(result)
        this.categoryList=result;
        else
         alert("Not category ")
      })
     }
 

  ngOnInit(): void {
  }

}
