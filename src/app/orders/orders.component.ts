import { Component, OnInit } from "@angular/core";
import { OrderService } from "src/Services/order.service";

@Component({
  selector: "orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"]
})
export class OrdersComponent implements OnInit {
  ordersList = [];
  constructor(private orderService: OrderService) {}

  ngOnInit() {
    console.log("order component");
    this.getAllOrders();
  }

  getAllOrders() {
    this.orderService.getOrders().subscribe(res => {
      this.ordersList = res.orders;
      console.log(res.orders);
    });
  }
}
