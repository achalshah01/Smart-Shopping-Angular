import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Http, HttpModule } from "@angular/http";
import { Router } from "@angular/router";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { AppRoutingModule } from "./app.routing";
import { HeaderComponent } from "./header/header.component";

import { PaymentsComponent } from "./payments/payments.component";
import { OrdersComponent } from "./orders/orders.component";
import { CartComponent } from "./cart/cart.component";
import { VendorLoginComponent } from "./vendor-login/vendor-login.component";
import { CartService } from ".././Services/cartService";
import { DecimalPipe } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDashboardComponent,
    HeaderComponent,
    PaymentsComponent,
    OrdersComponent,
    CartComponent,
    VendorLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpClient,
    HttpClientModule,
    UserDashboardComponent,
    CartService,
    DecimalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
