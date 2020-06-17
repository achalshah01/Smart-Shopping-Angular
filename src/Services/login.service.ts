import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Form } from "@angular/forms";
import { Observable } from "rxjs";
import { Credentials } from "src/Models/Credentials";
import { MsgToken } from "src/Models/MsgToken";
import { map, take } from "rxjs/operators";
import { Http, Headers, RequestOptions } from "@angular/http";
@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}
  vendorLoginUrl = "http://localhost:3000/vendor/login";
  userLoginUrl = "http://localhost:3000/user/login";

  //vendorLogin
  validateVendorLogin(cred: Credentials): Observable<any> {
    console.log("in validateVendorLogin");
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(this.vendorLoginUrl, cred, {
        headers: new HttpHeaders().set("Content-Type", "application/json")
      })
      .pipe(map(res => res));
  }

  //userLogin

  validateUserLogin(cred: Credentials): Observable<any> {
    console.log("in validateUserLogin ");
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(this.userLoginUrl, cred, {
        headers: new HttpHeaders().set("Content-Type", "application/json")
      })
      .pipe(map(res => res));
  }
}
