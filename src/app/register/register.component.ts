import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {matchPasswordValidator} from "../common/match-password.validator";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{

  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  registerForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
    email:  ['', [Validators.required, Validators.email]] ,
    passwordField:this.formBuilder.group({
      password:  ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      confirmPassword:['', Validators.required] }, {validators: matchPasswordValidator})
  });

  onSubmit(){
    console.log('ok submit');
  }

  onReset(){
    console.log('reset')
  }

}
