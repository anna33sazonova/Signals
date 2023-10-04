import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {UserSignInForm} from "../data.model";
import {AuthService} from "../common/auth.service";
import {Router} from "@angular/router";
import {TokenStorageService} from "../common/token-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() isLoggedIn!: boolean;

  constructor(private fBuilder: FormBuilder, private authService: AuthService, private router: Router, private token: TokenStorageService) {}

  connectionForm = this.fBuilder.group<UserSignInForm>({
    username: new FormControl('', { validators: [Validators.required] , nonNullable: true}),
    password: new FormControl('', { validators: [Validators.required] , nonNullable: true})
  });

  submitConnectionForm(): void {
    if (this.connectionForm.valid) {
      this.authService.login(this.connectionForm.getRawValue());
    }
  //  this.router.navigate(['info']);
    console.log('submit');
  }

  logout(): void {
    this.token.signOut();
    window.location.reload();
    //  this.router.navigate(['']);
  }
}
