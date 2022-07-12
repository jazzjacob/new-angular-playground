import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.css']
})
export class AssignmentTwoComponent implements OnInit {

  usernameIsEntered = false;
  username = ''

  settingUsername(event: any) {
    const input = event.target.value
    if (input.length > 0) {
      this.usernameIsEntered = true;
    } else {
      this.usernameIsEntered = false;
    }
  }

  resetUsername() {
    this.username = ''
    this.usernameIsEntered = false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
