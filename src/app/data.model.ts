import {FormControl} from "@angular/forms";

export interface JwtResponse {
  username: string;
  token: string
}

export interface UserSignInForm {
  username: FormControl<string>;
  password: FormControl<string>;
}

export interface UserSignIn {
  username: string;
  password: string;
}

export interface UserSignUpForm {
  username: string;
  email: string;
  password: string;
}
