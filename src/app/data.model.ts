import {FormControl} from "@angular/forms";

export interface JwtResponse {
  userName: string;
  token: string
}

export interface UserLoginForm {
  name: FormControl<string>;
  password: FormControl<string>;
}

export interface UserLogin {
  name: string;
  password: string;
}

