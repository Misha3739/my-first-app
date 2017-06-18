import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  userName = '';

  constructor() {
  }

  ngOnInit() {
  }

  signUpUserDisabled() {
    return this.userName.length === 0;
  }

  btnSignUserClicked(event: Event) {
    this.userName = '';
  }
}
