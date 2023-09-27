import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserLogin} from "../data.model";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  public loginUser(userLogin: UserLogin): void {
    this.httpClient.post<any>('http://localhost:4200/', userLogin).subscribe((jwtResponse: any) => {
        localStorage.setItem('access_token', JSON.stringify(jwtResponse));
        // sessionStorage
    });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  logout() {
    localStorage.removeItem('access_token')
  }
}
