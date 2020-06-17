import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { LoginService } from "src/Services/login.service";
import { Credentials } from "src/Models/Credentials";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  credentials: Credentials;
  credentialsForm: FormGroup;
  token: String;
  authMsg: String;
  loginSuccess: boolean;
  rememberMe = ["No", "Yes"];
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.createFormGroup();
  }

  createFormGroup() {
    this.credentialsForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("")
    });
  }

  onSubmit() {
    console.log("in submit");
    this.loginSuccess = true;
    let credentials = this.credentialsForm.value;
    console.log(credentials);
    console.log("Fetching data");

    this.loginService.validateUserLogin(credentials).subscribe(data => {
      console.log(data.message);

      if (data.message != "Auth failed") {
        this.token = data.token;
        localStorage.setItem("authToken", this.token.toString());
        console.log(localStorage.getItem("authToken"));
        this.authMsg = data.message;
        this.loginSuccess = true;

        this.navigateToDashBoard();
      } else {
        this.loginSuccess = false;
      }
    });
  }

  navigateToDashBoard() {
    console.log("navigateToDashBoard");

    console.log(this.loginSuccess);
    if (this.authMsg == "Auth successful") {
      this.router.navigate(["/userDashboard"]);
    }
  }
}
