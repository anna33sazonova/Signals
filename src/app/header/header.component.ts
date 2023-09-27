import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {UserLoginForm} from "../data.model";
import {AuthService} from "../common/auth.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private fBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  connectionForm = this.fBuilder.group<UserLoginForm>({
    name: new FormControl('', { validators: [Validators.required] , nonNullable: true}),
    password: new FormControl('', { validators: [Validators.required] , nonNullable: true})
  });

  submitConnectionForm(): void {
    if (this.connectionForm.valid) {
      this.authService.loginUser(this.connectionForm.getRawValue());
    }
  //  this.router.navigate(['info']);
    console.log('submit');
  }



}
