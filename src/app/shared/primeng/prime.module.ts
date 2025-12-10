import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

const MODULES = [
  ButtonModule,
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
