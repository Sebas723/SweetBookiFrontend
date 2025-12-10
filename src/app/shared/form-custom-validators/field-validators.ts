import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class FieldValidators {

  static required(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value?.trim() ? null : { required: true };
    };
  }

  static validAge(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      const birth = new Date(control.value);
      const age = new Date().getFullYear() - birth.getFullYear();
      return age >= 18 && age <= 70 ? null : { invalidAge: true };
    };
  }


  static onlyNumbers(): ValidatorFn {
    const regex = /^[0-9]+$/;
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      return regex.test(control.value) ? null : { onlyNumbers: true };
    };
  }

  static email(): ValidatorFn {
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      return regex.test(control.value) ? null : { email: true };
    };
  }

  static minLength(min: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value && control.value.length < min
        ? { minLength: { min } }
        : null;
    };
  }

  static matchFields(field1: string, field2: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const value1 = formGroup.get(field1)?.value;
      const value2 = formGroup.get(field2)?.value;

      if (value1 !== value2) {
        formGroup.get(field2)?.setErrors({ fieldsNotMatch: true });
        return { fieldsNotMatch: true };
      } else {
        if (formGroup.get(field2)?.hasError('fieldsNotMatch')) {
          formGroup.get(field2)?.setErrors(null);
        }
      }

      return null;
    };
  }
}
