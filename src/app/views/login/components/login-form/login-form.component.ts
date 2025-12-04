import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeModule } from '../../../../shared/primeng/prime.module';
import { CommonModule } from '@angular/common';
import { AuthLoginService } from '../../../../services/login/auth-login.service';

@Component({
  selector: 'app-login-form',
  imports: [PrimeModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  fb = inject(FormBuilder);
  router = inject(Router);
  authLoginService = inject(AuthLoginService);

  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }


  onSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) return;

    console.log("Intentando enviar login...");

    if (this.loginForm.valid) {
      console.log("Formulario válido");
      const loginData = this.loginForm.value;

      this.authLoginService.loginUser({
        email: loginData.email ?? '',
        password: loginData.password ?? '',
      }).subscribe({
        next: (response) => {
          console.log('Login exitoso:', response);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Error en el login:', error);
          alert(error?.error.error);
        }
      });
    } else {
      console.log("Formulario inválido:", this.loginForm.errors);
    }
  }
}
