import { Component } from '@angular/core';
import { LoginIlustrationComponent } from "./components/login-ilustration/login-ilustration.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";

@Component({
  selector: 'app-login',
  imports: [LoginIlustrationComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
