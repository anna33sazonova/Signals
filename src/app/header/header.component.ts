import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserLogin} from "../data.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private fBuilder: FormBuilder) {}


  userLogin: UserLogin = new UserLogin('', '');

  connectionForm = this.fBuilder.group({
    userName: ['', [Validators.required]],
    password: ['', Validators.required]
  });

  submitConnectionForm(): void {
    this.userLogin.name = this.connectionForm.value?.userName;
    this.userLogin.password = this.connectionForm.value?.password;
    console.log('submit');
  }



}
