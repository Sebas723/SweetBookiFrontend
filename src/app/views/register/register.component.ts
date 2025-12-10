import { Component } from '@angular/core';
import { RegisterIlustrationComponent } from "./components/register-ilustration/register-ilustration.component";
import { RegisterFormComponent } from "./components/register-form/register-form.component";

@Component({
  selector: 'app-register',
  imports: [RegisterIlustrationComponent, RegisterFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
