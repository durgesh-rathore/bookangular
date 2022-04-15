import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
// import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  cid:any="";
  categoryName:any="";
  categoryImageUrl:any=""
  categories:any;
  constructor(private router:ActivatedRoute,private cs:CategoryService) {
    this.cid=this.router.snapshot.paramMap.get('cid')
      this.cs.viewCategoryf().subscribe(result=>{
        this.categories=result;
        for(let category of this.categories){
          if(category._id==this.cid){
            this.categoryName=category.categoryName;
            this.categoryImageUrl=category.categoryImageUrl;
          }
        }
      })
     }
  
  ngOnInit(): void {
  }

}
