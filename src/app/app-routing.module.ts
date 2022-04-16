import { NgModule } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './category.service';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from './auth.guard';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = 
 [
    {path:"signup", component:UserSignUpComponent},
    {path:"signin",component:UserSignInComponent},
    {path:"addCategory", component:CategoryComponent},
    {path:"viewCategory",
    component:ViewCategoryComponent
    // canActivate:[AuthGuard] 
  },
    {path:"addProduct",
      component:AddProductComponent,
       canActivate:[AuthGuard]
    },
    {path:"orderPlace",
      component:OrderComponent,
       canActivate:[AuthGuard]
    },
    {path:"viewProduct",
      component:ViewProductComponent,
     canActivate:[AuthGuard]},
    {path:"edit-category/:cid",component:EditCategoryComponent},
    {path:"edit-product/:pid",component:EditProductComponent},
    {path:"**",component:PageNotFoundComponent}
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
