import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserDashboardComponent } from "src/app/user-dashboard/user-dashboard.component";
import { LoginComponent } from "src/app/login/login.component";
import { PaymentsComponent } from "./payments/payments.component";
import { OrdersComponent } from "./orders/orders.component";
import { CartComponent } from "./cart/cart.component";
import { VendorLoginComponent } from "./vendor-login/vendor-login.component";

const routes: Routes = [
  { path: "userDashboard", component: UserDashboardComponent },
  { path: "app-login", component: LoginComponent },
  { path: "vendorLogin", component: VendorLoginComponent },
  {
    path: "app-payments",
    component: PaymentsComponent
  },
  { path: "orders", component: OrdersComponent },
  { path: "cart", component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
