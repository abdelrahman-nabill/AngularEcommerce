import { authGuard } from './guards/auth.guard';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { BrandDetailsComponent } from './components/brand-details/brand-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { CategorySliderComponent } from './components/category-slider/category-slider.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  {path:"",redirectTo:"home", pathMatch:"full"},
  {path:"home",canActivate:[authGuard] ,component: HomeComponent},
  {path:"cart",canActivate:[authGuard] , component: CartComponent},
  {path:"wishList",canActivate:[authGuard] , component: WishListComponent},
  {path:"products",canActivate:[authGuard] , component: ProductsComponent},
  {path:"categories",canActivate:[authGuard] , component: CategoriesComponent},
  {path:"brands",canActivate:[authGuard] , component: BrandsComponent},
  {path:"signin", component:SignInComponent },
  {path:"signup", component:SignUpComponent },
  {path:"slider", component:CategorySliderComponent },
  {path:"loading", component:LoadingComponent },
  {path:"forgetPassword", component:ForgetPasswordComponent },
  {path:"resetPassword", component:ResetPasswordComponent },
  {path:"categories/:slug/:id/subcategories", canActivate:[authGuard] ,component:CategoryDetailsComponent },
  {path:"details/:slug/:id", canActivate:[authGuard] ,component:ProductDetailsComponent },
{path:"allorders", canActivate:[authGuard] ,component:AllOrdersComponent },
  {path:"brands/:id", canActivate:[authGuard] ,component:BrandDetailsComponent },
  {path:"payment/:id", canActivate:[authGuard] ,component:PaymentComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
