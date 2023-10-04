import {Component} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {matchPasswordValidator} from "../common/match-password.validator";
import {AuthService} from "../common/auth.service";
import {UserSignUpForm} from "../data.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  submitted = false;
  signUpFailed = false;
  message = '';

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {
  }

  registerForm: FormGroup = this.formBuilder.group({
    username: new FormControl('', {
      validators: [Validators.required, Validators.minLength(5), Validators.maxLength(20)],
      nonNullable: true
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true
    }),
    passwordField: this.formBuilder.group({
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(20)],
        nonNullable: true
      }),
      confirmPassword: new FormControl('', {validators: [Validators.required], nonNullable: true})
    }, {validators: matchPasswordValidator})
  });

  onSubmit(): void {
    const formData = this.registerForm.value;
    const data: UserSignUpForm = {
      username: formData.username,
      email: formData.email,
      password: formData.password
    }
    this.auth.register(data).subscribe(
      data => {
        console.log(data);
        this.submitted = true;
        this.signUpFailed = false;
      },
      err => {
        this.message = err.error.message;
        this.signUpFailed = true;
      }
    )
  }

  onReset() {
    this.registerForm.reset();
  }

}
