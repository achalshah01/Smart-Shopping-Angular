import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, take } from "rxjs/operators";
import { Observable } from "rxjs";
import { Product } from "../Models/Product";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}
  productUrl = "http://localhost:3000/products";

  getProducts(): Observable<any> {
    return this.http.get(this.productUrl);
  }

  createProduct(product: Product): Observable<any> {
    console.log(product);
    console.log("in create prod service ");

    console.log(localStorage.getItem("authToken"));

    return this.http.post(this.productUrl, product, {
      headers: new HttpHeaders()
        // .set("Authorization", "bearer " + localStorage.getItem("authToken"))
        .set("Content-Type", "application/json")
    });
  }

  deleteProduct(_id: String): Observable<any> {
    console.log("in delete service");

    return this.http.delete(this.productUrl + "/" + _id, {
      headers: new HttpHeaders().set(
        "Authorization",
        "bearer " + localStorage.getItem("authToken")
      )
    });
  }

  updateProduct(name, price, productId): Observable<any> {
    console.log("updating to" + name + " " + price);

    return this.http.patch(
      this.productUrl + "/" + productId,
      [{ propName: "name", value: name }, { propName: "price", value: price }],
      {
        headers: new HttpHeaders().set(
          "Authorization",
          "bearer " + localStorage.getItem("authToken")
        )
      }
    );
  }
}
