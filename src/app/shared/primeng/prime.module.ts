import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FloatLabel } from 'primeng/floatlabel';

const MODULES = [
  ButtonModule,
  InputTextModule,
  PasswordModule,
  FloatLabel
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODULES
  ],
  providers: [
    // MessageService
  ],
  exports: [
    ...MODULES
  ]
})

export class PrimeModule { }
