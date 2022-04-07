import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  cid:any="";
  categoryName:any=""
  constructor(private router:ActivatedRoute) {
    this.cid=this.router.snapshot.paramMap.get('cid')
    this.categoryName=this.router.snapshot.paramMap.get('categoryName')
   }

  ngOnInit(): void {
  }

}
