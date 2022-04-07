import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserService } from './user.service';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './category.service';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TokenAuthService } from './token-auth.service';
 import { map } from 'rxjs';
import { EditCategoryComponent } from './edit-category/edit-category.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserSignUpComponent,
    UserSignInComponent,
    PageNotFoundComponent,
    CategoryComponent,
    ViewCategoryComponent,
    AddProductComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService,CategoryService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenAuthService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
