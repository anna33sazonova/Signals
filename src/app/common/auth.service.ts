import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { UserLogin} from "../data.model";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  public loginUser(userLogin: UserLogin, form: boolean): void {
    this.httpClient.post<any>('http://localhost:4200/', userLogin).subscribe((jwtResponse: any) => {
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
