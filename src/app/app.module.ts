import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FooterComponent } from './components/footer/footer.component';
import{HttpClientModule} from '@angular/common/http';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { BrandDetailsComponent } from './components/brand-details/brand-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { RouterModule } from '@angular/router';
import { CategorySliderComponent } from './components/category-slider/category-slider.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    CategoriesComponent,
    BrandsComponent,
    ProductDetailsComponent,
    SignUpComponent,
    SignInComponent,
    FooterComponent,
    CategoryDetailsComponent,
    BrandDetailsComponent,
    WishListComponent,
    LoadingComponent,
    AllOrdersComponent,
    NotFoundComponent,
    MainSliderComponent,
    CategorySliderComponent,
    PaymentComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    SearchPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CarouselModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
