import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../common/token-storage.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  //todo add type
  currentUser!: any;

  constructor(private token: TokenStorageService) {}

  ngOnInit(): void {
    console.log(this.currentUser);
    this.currentUser = this.token.getUser();
  }

}
