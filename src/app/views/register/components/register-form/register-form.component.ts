import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PrimeModule } from '../../../../shared/primeng/prime.module';
import { CommonModule } from '@angular/common';
import { FieldValidators } from '../../../../shared/form-custom-validators/field-validators';
import { getErrorMessage } from '../../../../shared/messages/form/field-errors/error-form-messages';

@Component({
  selector: 'app-register-form',
  imports: [PrimeModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  fb = inject(FormBuilder);
  router = inject(Router);

  registerForm = this.fb.group({
    firstName: ['', [
      FieldValidators.required(),
    ]],
    secondName: [''],
    lastName: ['', [
      FieldValidators.required(),
    ]],
    phoneNumber: ['', [
      FieldValidators.onlyNumbers(),
      FieldValidators.minLength(7),
    ]],
    birthDate: ['', [
      FieldValidators.required(),
      FieldValidators.validAge(),
    ]],
    email: ['', [
      FieldValidators.required(),
      FieldValidators.email(),
    ]],
    password: ['', [
      FieldValidators.required(),
      FieldValidators.minLength(8),
    ]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validators: FieldValidators.matchFields('password', 'confirmPassword')
  });

  get firstName() { return this.registerForm.get('firstName'); }
  get secondName() { return this.registerForm.get('secondName'); }
  get lastName() { return this.registerForm.get('lastName'); }
  get phoneNumber() { return this.registerForm.get('phoneNumber'); }
  get birthDate() { return this.registerForm.get('birthDate'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }


  getErrorMessage(control: AbstractControl | null): string | null {
    return getErrorMessage(control);
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    };

    console.log("Formulario válido", this.registerForm.value);
  }
}
