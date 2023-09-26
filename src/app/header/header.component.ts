import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private fBuilder: FormBuilder) {
  }

  connectionForm = this.fBuilder.group({
    userName: ['', [Validators.required]],
    password: ['', Validators.required]
  });

  submitConnectionForm(): void {
    console.log('submit')
  }

  ngOnInit(): void {
  }

}
