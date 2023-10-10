import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";

const API_URL = 'http://localhost:8081/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public refreshView = new Subject<Date>();

  constructor(private http: HttpClient){}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', {responseType: 'text'});
  }

  getUserInfo(): Observable<any> {
    return this.http.get(API_URL + 'info', {responseType: 'text'});
  }
}
