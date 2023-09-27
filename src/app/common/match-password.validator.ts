import {FormGroup} from '@angular/forms';

export function matchPasswordValidator(formGroup: FormGroup) {
  const password = formGroup.get('password')?.value;
  const passwordConfirm = formGroup.get('confirmPassword')?.value;

  if (password === passwordConfirm) {
    return null;
  } else if (password !== passwordConfirm) {
    return {
      passwordError: "Passwords do not match"
    }
  }
  return null;
}
