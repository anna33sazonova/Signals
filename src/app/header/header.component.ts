import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {UserSignInForm} from "../data.model";
import {AuthService} from "../common/auth.service";
import {Router} from "@angular/router";
import {TokenStorageService} from "../common/token-storage.service";
import {UserService} from "../common/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() isLoggedIn!: boolean;

  message!: string;

  constructor(private fBuilder: FormBuilder, private authService: AuthService, private router: Router, private token: TokenStorageService, private userService: UserService) {
  }

  connectionForm = this.fBuilder.group<UserSignInForm>({
    username: new FormControl('', {validators: [Validators.required], nonNullable: true}),
    password: new FormControl('', {validators: [Validators.required], nonNullable: true})
  });

  submitConnectionForm(): void {
    if (this.connectionForm.valid) {
      this.authService.login(this.connectionForm.getRawValue()).subscribe(
        data => {
          this.token.saveToken(data.accessToken);
          this.token.saveUser(data);
        },
        error => {
          this.message = error.error.message;
        }
      );
    }
    this.connectionForm.reset();
    //  this.userService.refreshView.next(new Date());
    window.location.reload();
    window.location.href='http://localhost:4200/info';
  //  this.router.navigate(['info']);
  }

  logout(): void {
    this.token.signOut();
    // this.userService.refreshView.next(new Date());
    window.location.reload();
    window.location.href='http://localhost:4200/';
  //  this.router.navigate(['']);
  }
}
