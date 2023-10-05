import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserSignIn, UserSignUpForm} from "../data.model";
import {Observable} from "rxjs";

const AUTH_API = 'http://localhost:8081/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient: HttpClient) {}

  // todo add types

  login(credentials: UserSignIn): Observable<any> {
    return this.httpClient.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions)
  }

  register(user: UserSignUpForm): Observable<any> {
    return this.httpClient.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
