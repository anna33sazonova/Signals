import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {JwtResponse, UserLogin} from "../data.model";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  public loginUser(userLogin: UserLogin, form: boolean): void {
    this.httpClient.post<JwtResponse>('http://localhost:4200/', userLogin).subscribe((jwtResponse: JwtResponse) => {
      if (form) {
        localStorage.setItem('access_token', JSON.stringify(jwtResponse));
        console.log(jwtResponse)
      }
    });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
}
