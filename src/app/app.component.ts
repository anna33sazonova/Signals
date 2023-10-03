import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "./common/token-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  username!: string;

  constructor(private token: TokenStorageService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.username = user.username;
    }
  }

  logout(): void {
    this.token.signOut();
    window.location.reload();
  }
}
