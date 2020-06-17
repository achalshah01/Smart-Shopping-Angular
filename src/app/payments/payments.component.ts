import { Component, OnInit } from "@angular/core";
import { UserDashboardComponent } from "../user-dashboard/user-dashboard.component";
import { CartService } from "../../Services/cartService";
import { Product } from "../..//Models/Product";
import { parse } from "url";
import { DecimalPipe } from "@angular/common";
import { OrderService } from "src/Services/order.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-payments",
  templateUrl: "./payments.component.html",
  styleUrls: ["./payments.component.css"]
})
export class PaymentsComponent implements OnInit {
  public itemsInCart = [];
  public totalCost: Number = 0;
  constructor(
    private cartService: CartService,
    private decimalPipe: DecimalPipe,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log("component loaded");

    console.log(this.cartService.itemsInCart);
    this.itemsInCart = this.cartService.itemsInCart;
    console.log("after priniting");

    this.cartSum();
  }

  cartSum() {
    this.itemsInCart.forEach(x => {
      console.log(x.price);
      this.totalCost = +x.price + +this.totalCost;
    });
    this.totalCost = +this.totalCost / 1.0;
    this.totalCost = +this.decimalPipe.transform(this.totalCost);
  }

  //under construction
  checkOut() {
    let order = {
      productId: [],
      totalCost: this.totalCost
    };
    this.itemsInCart.forEach(product => {
      order.productId.push(product._id);
    });
    this.orderService.createOrder(order).subscribe(res => {
      console.log(res);
      this.router.navigate(["orders"]);
    });
  }
}
