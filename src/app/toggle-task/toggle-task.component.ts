import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-toggle-task',
  templateUrl: './toggle-task.component.html',
  styleUrls: ['./toggle-task.component.css']
})
export class ToggleTaskComponent implements OnInit {

  toggleButtonText = 'Show secret';
  secretPassword = 'Pa****rd';

  logArray = [];

  constructor() {
  }

  ngOnInit() {
  }

  getDate() {
    return Date();
  }

  btnToggleClick() {
    this.toggleButtonText = this.toggleButtonText === 'Show secret' ? 'Hide secret' : 'Show secret';
    let lastNum = 0;
    if (this.logArray.length >= 1) {
      lastNum = this.logArray[this.logArray.length - 1];
    }
    this.logArray.push(lastNum + 1);
  }
}
