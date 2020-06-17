import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  orderUrl = "http://localhost:3000/orders";
  constructor(private http: HttpClient) {}
  //get orders
  getOrders(): Observable<any> {
    return this.http.get(this.orderUrl);
  }

  //post orders
  createOrder(order): Observable<any> {
    return this.http.post(this.orderUrl, order);
  }
}
