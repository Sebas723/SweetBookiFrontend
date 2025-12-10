import { AbstractControl } from "@angular/forms";

export function getErrorMessage(control: AbstractControl | null): string | null {

  if (!control || !control.touched || !control.errors) return null;

  const errors = control.errors;

  if (errors['required']) return 'Este campo es obligatorio';
  if (errors['email']) return 'Debe ser un correo válido';
  if (errors['onlyNumbers']) return 'Solo se permiten números';
  if (errors['minLength']) return `Minimo ${errors['minLength'].min} caracteres`;
  if (errors['invalidAge']) return 'Debes tener entre 18 y 70 años';
  if (errors['fieldsNotMatch']) return 'Las contraseñas no coinciden';

  return null;
}
